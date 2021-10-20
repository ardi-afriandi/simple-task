import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileExcel, faFilePdf, faFileWord, faFolder,
} from '@fortawesome/free-solid-svg-icons';
import PageHeader from './PageHeader';

const PageContent = () => (
  <div className="container-fluid">
    <PageHeader />
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Owner</th>
            <th scope="col">Last modified</th>
            <th scope="col">File size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFolder} size="lg" color="grey" />
                <span className="ml-3">DB-Transactional</span>
              </a>
            </td>
            <td>me</td>
            <td>Sep 15, 2021 me</td>
            <td>...</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFolder} size="lg" color="grey" />
                <span className="ml-3">Old Doc</span>
              </a>
            </td>
            <td>Priscillia</td>
            <td>Sep 14, 2021 Priscillia</td>
            <td>...</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFileExcel} size="lg" color="green" />
                <span className="ml-3">Grouping Data</span>
              </a>
            </td>
            <td>Priscillia</td>
            <td>Sep 14, 2021 Priscillia</td>
            <td>75 KB</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFileWord} size="lg" color="blue" />
                <span className="ml-3">Business Rule</span>
              </a>
            </td>
            <td>Priscillia</td>
            <td>Sep 14, 2021 Priscillia</td>
            <td>826 KB</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFilePdf} size="lg" color="red" />
                <span className="ml-3">Sprint 1 CASA</span>
              </a>
            </td>
            <td>Priscillia</td>
            <td>Sep 14, 2021 Priscillia</td>
            <td>826 KB</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFilePdf} size="lg" color="red" />
                <span className="ml-3">Time Deposit</span>
              </a>
            </td>
            <td>Priscillia</td>
            <td>Sep 14, 2021 Priscillia</td>
            <td>826 KB</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFilePdf} size="lg" color="red" />
                <span className="ml-3">Sprint 1 Dashboard</span>
              </a>
            </td>
            <td>Priscillia</td>
            <td>Sep 14, 2021 Priscillia</td>
            <td>826 KB</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFileExcel} size="lg" color="green" />
                <span className="ml-3">Sprint 1 CASA</span>
              </a>
            </td>
            <td>Priscillia</td>
            <td>Sep 14, 2021 Priscillia</td>
            <td>826 KB</td>
          </tr>
          <tr>
            <td>
              <a href="#">
                <FontAwesomeIcon icon={faFileWord} size="lg" color="blue" />
                <span className="ml-3">Time Deposit</span>
              </a>
            </td>
            <td>Priscillia</td>
            <td>Sep 14, 2021 Priscillia</td>
            <td>826 KB</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PageContent;
