import { auth } from '@/auth';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getAllOrders } from '@/lib/actions/order.actions';
import { requireAdmin } from '@/lib/auth-guard';
import Pagination from '@/components/shared/pagination';
import { formatId, formatDateTime, formatCurrency } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Admin Orders',
};

const AdminOrdersPage = async (props: {
  searchParams: Promise<{ page: string }>;
}) => {
  const { page = '1' } = await props.searchParams;
  const session = await auth();
  if (session?.user?.role !== 'admin')
    throw new Error('User is not authorized');

  await requireAdmin();

  const orders = await getAllOrders({
    page: Number(page),
    // limit: 2,
  });

  return (
    <>
      <div className="space-y-2">
        <h2 className="font-bold">Orders</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Delivered</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.data.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{formatId(order.id)}</TableCell>
                  <TableCell>
                    {formatDateTime(order.createdAt).dateTime}
                  </TableCell>
                  <TableCell>{formatCurrency(order.totalPrice)}</TableCell>
                  <TableCell>
                    {order.isPaid && order.paidAt
                      ? formatDateTime(order.paidAt).dateTime
                      : 'Not paid'}
                  </TableCell>
                  <TableCell>
                    {order.isDelivered && order.deliveredAt
                      ? formatDateTime(order.deliveredAt).dateTime
                      : 'Not delivered'}
                  </TableCell>
                  <TableCell>
                    <Button size='sm' asChild variant='outline'>
                      <Link href={`/order/${order.id}`}>
                      Details
                      </Link>
                    </Button>
                    {/* Delete Button Here */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {orders.totalPages > 1 && (
            <Pagination
              page={Number(page) || 1}
              totalPages={orders?.totalPages}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminOrdersPage;
