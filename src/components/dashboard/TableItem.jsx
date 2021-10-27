import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { SimpleTaskContext } from '../../context/SimpleTaskContext';

const TableItem = ({ item }) => {
  const { findItem, removeItem } = useContext(SimpleTaskContext);

  return (
    <tr>
      <td>
        <a href="#">
          <FontAwesomeIcon icon={faFolder} size="lg" color="grey" />
          <span className="ml-3">{item.name}</span>
        </a>
      </td>
      <td>{item.owner}</td>
      <td>{item.lastModified}</td>
      <td>
        {item.fileSize}
        {' '}
        KB
      </td>
      <td>
        <div>
          <Button variant="link" onClick={() => findItem(item.id)}>
            <FontAwesomeIcon icon={faPen} size="sm" />
          </Button>
          <Button variant="link" onClick={() => removeItem(item.id)}>
            <FontAwesomeIcon icon={faTrashAlt} size="sm" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;
