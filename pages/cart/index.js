import { connect } from "react-redux";
import { IncreaseQuantity,DecreaseQuantity,DeleteCart } from '../../store/actions/cartActions';
import Image from 'next/image';

// Components
import Layout from "../../components/Layout";

// Design
import {
    Box,
    IconButton,
    Typography,
    Tooltip,
    TableContainer,
    Table,
    ListItem,
    TableHead, TableRow, TableCell, TableBody, Paper, ButtonGroup, Button, ListItemAvatar, Avatar, ListItemText
} from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const CartPage = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) => {
    let ListCart = [];
    let TotalCart = 0;

    Object.keys(items.Carts).forEach(function(item){
        TotalCart += items.Carts[item].quantity * items.Carts[item].price_brutto;
        ListCart.push(items.Carts[item]);
    });

    function TotalPrice(price, togging){
        return Number(price * togging).toFixed(2).toLocaleString('en-US');
    }

    return (
        <Layout title={"Koszyk"}>
            <Typography variant={'h6'} sx={{ marginBottom: '15px'}}>Koszyk</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nazwa produktu</TableCell>
                                <TableCell align="center">Cena Towaru</TableCell>
                                <TableCell align="center">Ilość</TableCell>
                                <TableCell align="center">Cena Całkowita</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { ListCart.map((item, key) => {
                                return (
                                    <TableRow
                                        key={key}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        hover={true}
                                    >
                                        <TableCell component="th" scope="row">
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar variant="square">
                                                        <Image src={ `https://api.extaz.pl` + item.image } width={'100px'} height={'100px'} />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary={item.title} />
                                            </ListItem>
                                        </TableCell>
                                        <TableCell align="center">{ item.price_brutto } zł</TableCell>
                                        <TableCell align="center">
                                            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                                                <Button variant="contained" onClick={ () => DecreaseQuantity(key) }>-</Button>
                                                <Button >{ item.quantity }</Button>
                                                <Button variant="contained" onClick={ () => IncreaseQuantity(key) }>+</Button>
                                            </ButtonGroup>
                                        </TableCell>
                                        <TableCell align="center">{ TotalPrice(item.price_brutto, item.quantity)} zł</TableCell>
                                        <TableCell align="right">
                                            <Tooltip title="Usuń" >
                                                <IconButton  onClick={ () => DeleteCart(key) } >
                                                    <DeleteOutlineOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                            { ListCart.length ? (
                                    <TableRow>
                                        <TableCell rowSpan={5} />
                                        <TableCell colSpan={2}>Do zapłaty:</TableCell>
                                        <TableCell align="right">{Number(TotalCart).toLocaleString('en-US')} zł</TableCell>
                                    </TableRow>
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={5} align={'center'}><Typography>Twój koszyk jest pusty 😭</Typography></TableCell>
                                        </TableRow>
                                    )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
        </Layout>
    )
}

const mapStateToProps = state => {
    return{
        items: state.cart
    }
}

export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(CartPage);