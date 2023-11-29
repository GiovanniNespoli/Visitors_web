import Header from "@/pages/components/Header";
import Layout from "@/pages/components/Layout";
import { TableHeaderItens, FakeItems } from "./constants/index";
import {
  Container,
  Content,
  FilterContainer,
  Grid,
  Item,
  TableBodyContainer,
  TableContainer,
  TableHeaderContainer,
  TableIcons,
  TableItem,
  TableRow,
} from "./styles";
import { MdModeEdit } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { PiTrashSimpleFill } from "react-icons/pi";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useVisitors } from "../hooks/visitors";
import IVisitors from "../interfaces/IVistors";
import toast from "react-hot-toast";

export default function ListVisitors() {
  const { GetVisitors, DeleteVisitors, UpdateVisitors } = useVisitors();

  const [items, setItems] = useState<IVisitors[]>([]);
  const [editableRows, setEditableRows] = useState<number[]>([]);

  const [updateName, setUpdateName] = useState("");
  const [updatePhone, setUpdatePhone] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");

  const { data } = GetVisitors();

  useEffect(() => {
    if (data) setItems(data);
  }, [data]);

  const toggleEdit = (index: number) => {
    if (editableRows.includes(index)) {
      return setEditableRows(editableRows.filter((i) => i !== index));
    }
    if (editableRows.length >= 1) {
      setEditableRows([]);
      return setEditableRows([index]);
    }
    return setEditableRows([...editableRows, index]);
  };

  return (
    <Layout>
      <Container>
        <Header
          title="Lista de visitantes"
          subTitle="Lista geral de visitantes"
        />
        <Grid>
          <Content>
            <TableContainer>
              <FilterContainer></FilterContainer>
              <TableHeaderContainer>
                {TableHeaderItens.map(({ item }, index) => {
                  return <div key={index}>{item}</div>;
                })}
              </TableHeaderContainer>
              <TableBodyContainer>
                {items.map((item, index) => {
                  const isEditable = editableRows.includes(index);

                  return (
                    <TableRow key={index}>
                      <TableItem>
                        <Item>
                          <input
                            disabled={!isEditable}
                            color="black"
                            placeholder={item.name}
                            onChange={(event) => {
                              setUpdateName(event.target.value);
                            }}
                          />
                        </Item>
                      </TableItem>
                      <TableItem>
                        <Item>
                          <input
                            disabled={!isEditable}
                            placeholder={item.phone}
                            onChange={(event) => {
                              setUpdatePhone(event.target.value);
                            }}
                          />
                        </Item>
                      </TableItem>
                      <TableItem>
                        <Item>
                          <input
                            disabled={!isEditable}
                            placeholder={item.email}
                            onChange={(event) => {
                              setUpdateEmail(event.target.value);
                            }}
                          />
                        </Item>
                      </TableItem>
                      <TableItem>
                        <Item>
                          <p>
                            {format(
                              new Date(item.createdAt),
                              "d/M/yyyy - HH:mm"
                            )}
                          </p>
                        </Item>
                      </TableItem>
                      <TableItem>
                        <TableIcons>
                          {isEditable ? (
                            <button
                              onClick={async () => {
                                await UpdateVisitors({
                                  id: item.id,
                                  name: updateName || item.name,
                                  phone: updatePhone || item.phone,
                                  email: updateEmail || item.email,
                                  createdAt: item.createdAt,
                                  updatedAt: item.updatedAt,
                                });
                                toggleEdit(index);
                              }}
                            >
                              <IoSaveSharp size={20} />
                            </button>
                          ) : (
                            <button onClick={() => toggleEdit(index)}>
                              <MdModeEdit size={20} />
                            </button>
                          )}
                          <button
                            onClick={async () => {
                              await DeleteVisitors(item.id);
                            }}
                          >
                            <PiTrashSimpleFill size={20} />
                          </button>
                        </TableIcons>
                      </TableItem>
                    </TableRow>
                  );
                })}
              </TableBodyContainer>
            </TableContainer>
          </Content>
        </Grid>
      </Container>
    </Layout>
  );
}
