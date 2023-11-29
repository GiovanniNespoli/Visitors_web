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
import { useCallback, useEffect, useState } from "react";
import { useVisitors } from "../hooks/visitors";
import IVisitors from "../interfaces/IVistors";

export default function ListVisitors() {
  const { GetVisitors, DeleteVisitors } = useVisitors();

  const [items, setItems] = useState<IVisitors[]>([]);
  const [editableRows, setEditableRows] = useState<number[]>([]);

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
                          />
                        </Item>
                      </TableItem>
                      <TableItem>
                        <Item>
                          <input
                            disabled={!isEditable}
                            placeholder={item.name}
                          />
                        </Item>
                      </TableItem>
                      <TableItem>
                        <Item>
                          <input
                            disabled={!isEditable}
                            placeholder={item.name}
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
                            <button onClick={() => toggleEdit(index)}>
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
