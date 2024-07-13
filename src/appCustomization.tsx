import React, { useState } from 'react';
import { AppConfig, TabConfig, ChartConfig } from './config';
import { Home, BarChart2, Settings, Users, Calendar, Phone, FileText, CheckSquare } from 'lucide-react';

type CustomComponentProps = {
  config: AppConfig;
};

interface CustomComponents {
  [key: string]: React.FC<CustomComponentProps>;
}

interface CustomData {
  [key: string]: any;
}

// =============== CUSTOM COMPONENTS ===============
const PropertyManagementComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Shopping Center A', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-15' },
    { id: 2, name: 'Retail Store B', status: 'Occupied', nextAction: 'Vacate', nextActionDate: '2023-10-01' },
    { id: 3, name: 'Office Building C', status: 'Vacant', nextAction: 'Occupy', nextActionDate: '2023-09-20' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Property Management</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Status</th>
            <th>Next Action</th>
            <th>Next Action Date</th>
          </tr>
        </thead>
        <tbody>
          {properties.map(property => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.status}</td>
              <td>{property.nextAction}</td>
              <td>{property.nextActionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const InvoiceProcessingComponent: React.FC<CustomComponentProps> = ({ config }) => {
  const [invoices, setInvoices] = useState([
    { id: 1, property: 'Shopping Center A', amount: 5000, status: 'Pending', dueDate: '2023-09-30' },
    { id: 2, property: 'Retail Store B', amount: 3000, status: 'Paid', dueDate: '2023-09-15' },
    { id: 3, property: 'Office Building C', amount: 7000, status: 'Overdue', dueDate: '2023-09-01' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Invoice Processing</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Property</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.id}>
              <td>{invoice.property}</td>
              <td>£{invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>{invoice.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// =============== CONFIGURATION ===============
const customConfig: AppConfig = {
  title: "QuoinStone Property Management",
  companyName: "QuoinStone Group",
  logo: "/path/to/quoinstone-logo.png",
  primaryColor: "#4F46E5",
  secondaryColor: "#818CF8",
  userName: "Tim Struth",
  dashboard: {
    tabs: [
      {
        id: "propertyManagement",
        label: "Property Management",
        description: "Manage property occupancy and vacancies",
        icon: Home
      },
      {
        id: "invoiceProcessing",
        label: "Invoice Processing",
        description: "Process and track property invoices",
        icon: FileText
      },
    ] as TabConfig[],
    charts: {
      propertyStatus: {
        type: "pie",
        dataKeys: ["value"],
        colors: ["#4F46E5", "#818CF8"],
        data: [
          { name: 'Occupied', value: 60 },
          { name: 'Vacant', value: 40 },
        ]
      },
      invoiceStatus: {
        type: "bar",
        dataKeys: ["count"],
        colors: ["#4F46E5"],
        data: [
          { name: 'Pending', count: 10 },
          { name: 'Paid', count: 15 },
          { name: 'Overdue', count: 5 },
        ]
      },
    }
  },
  analytics: {
    charts: {
      occupancyRate: {
        type: "line",
        dataKeys: ["rate"],
        colors: ["#4F46E5"],
        data: [
          { month: 'Jan', rate: 80 },
          { month: 'Feb', rate: 75 },
          { month: 'Mar', rate: 85 },
          { month: 'Apr', rate: 90 },
        ]
      },
      revenueByProperty: {
        type: "bar",
        dataKeys: ["revenue"],
        colors: ["#818CF8"],
        data: [
          { property: 'Shopping Center A', revenue: 50000 },
          { property: 'Retail Store B', revenue: 30000 },
          { property: 'Office Building C', revenue: 70000 },
        ]
      },
    }
  },
  clients: [
    { id: "client1", name: "Major Retailer", industry: "Retail" },
    { id: "client2", name: "Office Space Inc", industry: "Commercial Real Estate" },
    { id: "client3", name: "Shopping Mall Group", industry: "Retail" },
  ],
  features: {
    propertyManagement: true,
    invoiceProcessing: true,
    reporting: true,
    clientCommunication: true
  }
};

// =============== CUSTOM COMPONENTS MAPPING ===============
const customComponents: CustomComponents = {
  propertyManagement: PropertyManagementComponent,
  invoiceProcessing: InvoiceProcessingComponent,
};

// =============== CUSTOM DATA ===============
const customData: CustomData = {
  propertyTypes: ['Shopping Center', 'Retail Store', 'Office Building'],
  invoiceStatuses: ['Pending', 'Paid', 'Overdue'],
  occupancyStatuses: ['Vacant', 'Occupied'],
  actionTypes: ['Occupy', 'Vacate']
};

// =============== EXPORT ===============
export const customization = {
  config: customConfig,
  components: customComponents,
  data: customData,
};