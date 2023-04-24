import React from 'react';
import AdminBreadCrumb from '../../../components/tiny/AdminBreadCrumb';
import Paginate from '../../../components/tiny/Paginate';
import { Plus, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import { URL } from '../../../common/constant';

export default function Index() {
  const menuItems = [
    {
      title: 'Session List',
      to: null
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0">
        <h1 className="h2">Session List</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
      <AdminBreadCrumb items={menuItems} />
      <div className='frm-table-editor'>
        <form className="row">
          <div className="col input-group input-group-sm">
            <label className="control-label pt-1 lb-search-input">Session name: </label>
            <input type="search" className="form-control form-control-sm" />
          </div>
          <div className="col input-group input-group-sm">
            <label className="control-label pt-1 lb-search-input">Product name: </label>
            <input type="search" className="form-control form-control-sm" />
          </div>
          <div className="col input-group input-group-sm">
            <label className="control-label pt-1 lb-search-input">Description: </label>
            <input type="search" className="form-control form-control-sm" />
          </div>
          <div className="col input-group input-group-sm">
            <label className="control-label pt-1 lb-search-input">Close At: </label>
            <input type="date" className="form-control form-control-sm" />
          </div>
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-sm btn-outline-dark">
              <Search width={14} height={14} className='mt--3' />
              Search
            </button>
          </div>
        </form>
      </div>
      <Link to={URL.admin.session.create} className='btn btn-sm btn-outline-dark'>
        <Plus className='mt--3' width={18} height={18} />
        Create new Session
      </Link>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>placeholder</td>
              <td>tabular</td>
              <td>information</td>
              <td>irrelevant</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>text</td>
              <td>placeholder</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>visual</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>dashboard</td>
              <td>illustrative</td>
              <td>rich</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>random</td>
              <td>tabular</td>
              <td>information</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Paginate currentPage={3} />
    </>
  );
}
