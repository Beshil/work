import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  padding-left: 34px;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #000000;
    border-radius: 4px;
  }
  :after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 2px;
    background: #4a67ff;
    opacity: 0;
  }
`;
const CheckBoxInput = styled.input`
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  :checked + ${Label}:after {
    opacity: 1;
  }
`;

const CheckBoxField = ({ name, value, onChange, children }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value });
  };

  return (
    <Container>
      <CheckBoxInput
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />

      <Label htmlFor={name}>{children}</Label>
    </Container>
  );
};
CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CheckBoxField;
