import React from 'react';
import AjbMyInvestment from '../../components/ajb-my-investment/index.component';
import AjaibLayout from '../../features/ajaib-layout/index.component';

const DashboardPage: React.FC = () => {
  return (
    <AjaibLayout>
      <AjbMyInvestment />
      <div className="p-4">
        <p>Dashboard</p>
      </div>
    </AjaibLayout>
  );
}

export default DashboardPage;