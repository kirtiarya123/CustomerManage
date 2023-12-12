import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    address: '',
    customerNumber: '',
    meterSerialNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const createCustomer = () => {
    const newCustomer = { ...formData, id: Date.now() };
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
    resetForm();
  };

  const updateCustomer = () => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === formData.id ? { ...customer, ...formData } : customer
    );
    setCustomers(updatedCustomers);
    resetForm();
  };

  const deleteCustomer = (id) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  };

  const resetForm = () => {
    setFormData({
      id: null,
      name: '',
      address: '',
      customerNumber: '',
      meterSerialNumber: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Customer Management</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Address:</label>
          <input type="text" className="form-control" name="address" value={formData.address} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Customer Number:</label>
          <input type="text" className="form-control" name="customerNumber" value={formData.customerNumber} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Meter Serial Number:</label>
          <input type="text" className="form-control" name="meterSerialNumber" value={formData.meterSerialNumber} onChange={handleInputChange} />
        </div>

        {formData.id === null ? (
          <button type="button" className="btn btn-primary" onClick={createCustomer}>
            Create Customer
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={updateCustomer}>
            Update Customer
          </button>
        )}
      </form>

      <ul className="list-group mt-4">
        {customers.map((customer) => (
          <li key={customer.id} className="list-group-item d-flex justify-content-between align-items-center">
            {customer.name}  {customer.address}  {customer.customerNumber}  {customer.meterSerialNumber}
            <div>
              <button className="btn btn-warning me-2" onClick={() => setFormData(customer)}>
                Update
              </button>
              <button className="btn btn-danger" onClick={() => deleteCustomer(customer.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerManagement;
