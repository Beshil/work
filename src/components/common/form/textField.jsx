import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  margin-top: 10px;
  padding-left: 20px;
  background: #f5f5f5;
  border: ${({ error }) => (error ? "1px solid #E26F6F;" : "none")};
  border-radius: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
`;
const MargBut = styled.div`
  margin-bottom: 20px;
`;
const ErrorField = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 17px;
  color: #e26f6f;
`;

const TextField = ({ label, type, name, value, onChange, error }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <MargBut>
        <Input
          error={error}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
        />

        {error && <ErrorField>{error}</ErrorField>}
      </MargBut>
    </div>
  );
};
TextField.defaultProps = {
  type: "text",
};
TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
};

export default TextField;
