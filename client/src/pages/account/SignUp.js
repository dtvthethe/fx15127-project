import React from 'react';
import { Save } from 'react-feather';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function SignUp() {
  const myFormik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      gender: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Please enter your name.'),
      email: Yup.string().required('Please enter your email.').email('Email format is incorrect.')
    }),
    onSubmit: values => {
      console.log(11, values);
    },
  });

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-0">
        <h1 className="h2">Initiate A Pricing Session</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
        </div>
      </div>
      <form className='mx-auto col-10 col-md-8 col-lg-6 mt-5' action="#" onSubmit={myFormik.handleSubmit}>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label">Full Name:</label>
          <div className="col-sm-9">
            <input type="text" className={`form-control form-control-sm ${myFormik.touched.fullName && myFormik.errors.fullName && 'is-invalid'}`} name='fullName' onChange={myFormik.handleChange} onBlur={myFormik.handleBlur} value={myFormik.values.fullName}/>
            {
              myFormik.touched.fullName && myFormik.errors.fullName
              ? <div className="text-danger">{myFormik.errors.fullName}</div>
              : null
            }
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label">Email:</label>
          <div className="col-sm-9">
            <input type="text" className={`form-control form-control-sm ${myFormik.touched.email && myFormik.errors.email && 'is-invalid'}`} name='email' onChange={myFormik.handleChange} onBlur={myFormik.handleBlur} value={myFormik.values.email}/>
            {
              myFormik.touched.email && myFormik.errors.email
              ? <div className="text-danger">{myFormik.errors.email}</div>
              : null
            }
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-3 col-form-label">Product Description:</label>
          <div className="col-sm-9">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name='gender' id="male" defaultChecked onChange={myFormik.handleChange} onBlur={myFormik.handleBlur} value={1}/>
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name='gender' id="female" onChange={myFormik.handleChange} onBlur={myFormik.handleBlur} value={0}/>
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
              {
                myFormik.touched.gender && myFormik.errors.gender
                ? <div className="text-danger">{myFormik.errors.gender}</div>
                : null
              }
          </div>
        </div>
        <div className="form-group row mb-4">
          <div className="col d-flex justify-content-center">
            <button type="submit" className="btn btn-success btn-sm mx-2 px-4">
              <Save className='mt--3' width={18} height={18} />
                Register
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
