import { Input } from "antd";

const InputWrap = (props) => {
  return (
    <div className="input-wrapper">
      <Input {...props} />
    </div>
  );
};

export default InputWrap;
