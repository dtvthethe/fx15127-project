import React from 'react';
import { Save, X } from 'react-feather';

export default function SubmitPriceFrm(props) {
  const toggleModal = props.toggleModal;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header p-2">
          <h5 className="modal-title">Close A Pricing Session</h5>
          <button type="button" className="close-btn">
            <X width={18} height={18} onClick={() => toggleModal()} />
          </button>
        </div>
        <div className='border-bottom w-100'></div>
        <form>
          <div className="modal-body p-2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure dolores minima, nobis quisquam hic saepe. Reiciendis quibusdam maiores consequatur, voluptates illo vitae facilis corrupti! Obcaecati, iste. Labore obcaecati nobis repudiandae?</p>
            <div className="form-group row mb-4">
              <label className="col-sm-4 col-form-label">System suggest price:</label>
              <div className="col-sm-8 col-form-label">
                <strong>160,000 đ</strong>
              </div>
            </div>
            <div className="form-group row mb-4">
              <label className="col-sm-4 col-form-label">Product price:</label>
              <div className="col-sm-8">
                <input type="text" className="form-control form-control-sm" />
              </div>
            </div>
          </div>
          <div className='border-bottom w-100'></div>
          <div className="modal-footer p-2">
            <button type="button" onClick={() => toggleModal()} className='btn btn-outline-dark btn-sm px-4 mx-4'>
              <X className='mt--3' width={18} height={18} onClick={() => toggleModal()} />
              Close
            </button>
            <button type="button" className="btn btn-success btn-sm px-4">
              <Save className='mt--3' width={18} height={18} />
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
