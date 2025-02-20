import React from 'react';
import { cn } from '@/lib/utils';

const CheckoutSteps = ({ current = 0 }) => {
  return (
    <div className="md:flex-row flex-between flex-col space-y-2 space-x-2 mb-10">
      {['User Info', 'Shipping Address', 'Payment Method', 'Place Order'].map(
        (step, index) => (
          <React.Fragment key={step}>
            <div
              className={cn('p-2 w-56 rounded-full text-center text-sm', index === current? 'bg-secondary' : '')}
            >
                {step}
            </div>
            {step !== 'Place Order' && (
                <hr className=" border-t border-gray-300 w-16 mx-2" />
            )}
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default CheckoutSteps;
