import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/index";

import PropTypes from "prop-types";
import CheckBoxField from "../common/form/checkBoxField";

const Button = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 40px;
  background: ${({ disabled }) => (disabled ? "#99A9FF;" : "#4a67ff")};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  cursor: pointer;
`;

const NotFindUser = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  margin-bottom: 20px;
  background: #f5f5f5;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
`;

const LoginForm = ({ getEmail }) => {
  const history = useHistory();
  const [sendRequest, setRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    stayOn: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
      isEmail: {
        message: "Email введен некорректно",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
      min: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8,
      },
    },
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    validate();
  }, [data]);
  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    try {
      setRequest(true);

      const email = await api.user.getByEmail(data.email);

      const password = await api.user.getByPassword(data.password);
      setRequest(false);

      if (!email) {
        setErrorMessage(`Пользователя ${data.email} не существует`);
      } else if (!password) {
        setErrorMessage(`Пароль введен неправильно`);
      } else {
        getEmail(data.email);
        history.push("/profile");
      }
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage ? (
        <NotFindUser type="text" value={errorMessage} readonly></NotFindUser>
      ) : null}

      <TextField
        label="Логин"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Запомнить пароль
      </CheckBoxField>
      <Button type="submit" disabled={!isValid || sendRequest}>
        Войти
      </Button>
    </form>
  );
};
LoginForm.propTypes = {
  getEmail: PropTypes.func,
};
export default LoginForm;
