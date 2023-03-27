import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { style } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import colorConfigs from "../../../configs/colorConfigs";
import "../forms/styles/Form.css";

type FormProps = {
  key: string,
  title: string
}

export type ProductType = {
  id: number
  nameProduct: string,
  code: string,
  price: string,
  amount: string
}

const FormPage: React.FC<FormProps> = (props: FormProps) => {



  const [nameProduct, setNameProduct] = useState("");
  const [code, setCode] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const handleChangeNameProduct = (item: React.ChangeEvent<HTMLInputElement>) => {
    setNameProduct(item.target.value);
  }

  const handleChangeCodeProduct = (item: React.ChangeEvent<HTMLInputElement>) => {
    setCode(item.target.value);
  }

  const handleChangeQuantityProduct = (item: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(item.target.value));
  }

  const handleChangePriceProduct = (item: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(item.target.value));
  }


  const [producst, setProduct] = useState<ProductType[] | null>([]);
  const [openModal, setOpenModal] = useState(false);

  const HandleModal = () => {
    setOpenModal(!openModal)
  }

  const handleClose = () => {
    setOpenModal(false);
  }


  useEffect(() => {
    const url = 'http://localhost:8090/product';
    axios.get(url).then((response) => {
      setProduct(response.data);
    })
  }, [])


  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Tên sản phẩm</TableCell>
              <TableCell align="right">số lượng</TableCell>
              <TableCell align="right">Mã code</TableCell>
              <TableCell align="right">Giá</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {producst?.map((item) => (
              <TableRow
                // key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell align="right">{item.nameProduct}</TableCell>
                <TableCell align="right">{item.amount}</TableCell>
                <TableCell align="right">{item.code}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={HandleModal}>Open modal</Button>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400, backgroundColor: colorConfigs.bgModal,padding: 0 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </Box>
  )
}

export default FormPage;