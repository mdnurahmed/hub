import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import React, { useState, useEffect } from "react";
import { Button, List, Input } from "antd";

import axios from "axios";
function ShowHubs() {
  const state = useSelector((state) => state.getHubs);
  const dispatch = useDispatch();

  const { nextPage, prevPage, setHubs, changeCompany } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:8081/api/hubs`, {
      params: { page: state.page, company_id: state.company_id },
    });
    setHubs(data.hubs);
  };
  useEffect(() => {
    getData();
  }, [state.page, state.company_id]);

  const [val, setValue] = useState(state.company_id);

  let data = [];
  for (let i = 0; i < state.hubs.length; i++) {
    for (let key in state.hubs[i]) {
      data.push(
        <h4>
          {key} : {state.hubs[i][key]}
        </h4>
      );
    }
    data.push(<h3>---------------------------</h3>);
  }
  return (
    <>
      <Input.Group compact style={{padding:20}}>
        <Input
          style={{
            width: "calc(100% - 1000px)",
          }}
          placeholder="Company ID"
          value={val}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button type="primary" onClick={() => changeCompany(val)}>
          Company ID 
        </Button>
      </Input.Group>
      <List
        size="small"
        header={
          <div>
            <Button type="primary" size="large" onClick={() => nextPage()}>
              Next
            </Button>
            <h2>Current Page : {state.page}</h2>
          </div>
        }
        footer={
          <Button type="primary" size="large" onClick={() => prevPage()}>
            Prev
          </Button>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
}

export default ShowHubs;
