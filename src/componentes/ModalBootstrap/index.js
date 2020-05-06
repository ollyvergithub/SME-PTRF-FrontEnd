import React, {Fragment} from "react";
import {Button, Modal} from "react-bootstrap";
import "./modal-bootstrap.scss"

export const ModalBootstrap = (propriedades) =>{
    return (
        <Fragment>
            <Modal centered show={propriedades.show} onHide={propriedades.handleClose}>
                <Modal.Header>
                    <Modal.Title>{propriedades.titulo}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div dangerouslySetInnerHTML={{ __html: propriedades.bodyText }} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={propriedades.primeiroBotaoCss ? propriedades.primeiroBotaoCss : "primary"} onClick={propriedades.primeiroBotaoOnclick}>
                        {propriedades.primeiroBotaoTexto}
                    </Button>
                    {propriedades.segundoBotaoOnclick && propriedades.segundoBotaoTexto ? (
                        <Button variant={propriedades.segundoBotaoCss ? propriedades.segundoBotaoCss : "primary"} onClick={propriedades.segundoBotaoOnclick}>
                            {propriedades.segundoBotaoTexto}
                        </Button>
                    ):null}
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}