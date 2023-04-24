import React from 'react';
import { URL } from '../../../common/constant';
import AdminBreadCrumb from '../../../components/tiny/AdminBreadCrumb';
import { Link } from 'react-router-dom';

export default function Create() {
  const menuItems = [
    {
      title: 'Session List',
      to: URL.admin.session.list
    },
    {
      title: 'Initiate A Pricing Session',
      to: null
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
        <h1 className="h2">Initiate A Pricing Session</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
      <AdminBreadCrumb items={menuItems} />
      <form className='mx-auto col-10 col-md-8 col-lg-6'>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label">Product Images:</label>
          <div className="col-sm-9">
            <input class="form-control form-control-sm" id="formFileSm" type="file"></input>
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label">Session Name:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control form-control-sm" />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label">Product Name:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control form-control-sm" />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label">Product Description:</label>
          <div className="col-sm-9">
            <input type="text" className="form-control form-control-sm" />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label">Close At:</label>
          <div className="col-sm-9">
            <div className="row">
              <div className="col-sm-3 align-self-center">
                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Not set
                </label>
              </div>
              <div className="col-sm-9">
                <input type="date" className="form-control form-control-sm" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group row mb-4">
          <div className="col d-flex justify-content-center">
            <Link to={URL.admin.session.list} className="btn btn-light btn-sm mx-2 px-4">Back</Link>
            <button type="button" className="btn btn-success btn-sm mx-2 px-4">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}
