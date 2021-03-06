import Modal from 'antd/lib/modal';
import styled from 'styled-components';

export const ModalStyle = styled(Modal)`
  .anticon-close-circle {
    font-size: 18px;
    padding-top: 22px;
  }

  .ant-modal-body {
    padding: 16px 24px 24px 24px;
  }

  .ant-modal-content {
    max-width: 360px;
    width: 100%;
    margin: auto;
  }

  .ant-typography {
    color: #000 !important;
  }

  svg {
    color: black;
  }

  .ant-btn {
    margin-top: 18px;
    display: flex;
    align-items: center;
    font-size: 14px;
    background: #000 !important;

    img {
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
  }
`;
