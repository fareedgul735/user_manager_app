import { Button } from "antd";

const ButtonWrap = ({ children, ...props }) => {
  return (
    <div className="btn-wrapper">
      <Button {...props}>{children}</Button>
    </div>
  );
};

export default ButtonWrap;
