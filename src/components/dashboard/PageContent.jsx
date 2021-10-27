import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileExcel, faFilePdf, faFileWord, faFolder,
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from './PageHeader';
import { SimpleTaskContext } from '../../context/SimpleTaskContext';
import TableItem from './TableItem';

const PageContent = () => {
  const { items } = useContext(SimpleTaskContext);

  return (
    <div className="container-fluid">
      <PageHeader />
      {items.length
        ? (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Last modified</th>
                  <th scope="col">File size</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => <TableItem item={item} key={item.id} />)}
              </tbody>
            </table>
          </div>
        )
        : (
          <div className="text-danger"><h1>No Data Available</h1></div>
        )}
    </div>
  );
};

export default PageContent;
