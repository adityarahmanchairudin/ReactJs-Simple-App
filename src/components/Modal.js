import React, { Component } from 'react';
import styled from  'styled-components';
import {ProductConsumer} from '../Context';
import {ButtonContainer} from './button';
import {Link} from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen,closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                        return (
                        <ModelContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto py-2 col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price : Rp. {price}</h5>
                                        <Link to="/" className="mr-2">
                                        <ButtonContainer onClick={()=> closeModal()}>
                                            Continue Shopping
                                        </ButtonContainer>
                                        </Link>
                                        <Link to="/cart" className="mr-2">
                                        <ButtonContainer cart onClick={(()=> closeModal)}>
                                            go to Cart
                                        </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModelContainer>
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}
export default Modal;

const ModelContainer = styled.div
`   position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    background : rgba(0,0,0,0.3);
    display : flex;
    align-items : center;
    justify-content : center;
    #modal{
        background : var(--mainWhite);
    }
`;