'use client';

import { ShippingAddress } from '@/types';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useTransition } from 'react';
import { shippingAddressSchema } from '@/lib/validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader } from 'lucide-react';

const ShippingAddressForm = ({ address }: { address: ShippingAddress }) => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof shippingAddressSchema>>({
    resolver: zodResolver(shippingAddressSchema),
    defaultValues: address,
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = () => {
    return
  }

  return (
    <>
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="h2-bold mt-4">Shipping Address</h1>
        <p className="text-sm text-muted-foreground">
          Enter an address to ship to
        </p>
        <Form {...form}>
          <form
            method="post"
            className="space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex-col flex md:flex-row gap-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }: {field:ControllerRenderProps<z.infer<typeof shippingAddressSchema>, 'fullName'>}) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col flex md:flex-row gap-5">
              <FormField
                control={form.control}
                name="streetAddress"
                render={({ field }: {field:ControllerRenderProps<z.infer<typeof shippingAddressSchema>, 'streetAddress'>}) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col flex md:flex-row gap-5">
              <FormField
                control={form.control}
                name="city"
                render={({ field }: {field:ControllerRenderProps<z.infer<typeof shippingAddressSchema>, 'city'>}) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col flex md:flex-row gap-5">
              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }: {field:ControllerRenderProps<z.infer<typeof shippingAddressSchema>, 'postalCode'>}) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter postal code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex-col flex md:flex-row gap-5">
              <FormField
                control={form.control}
                name="country"
                render={({ field }: {field:ControllerRenderProps<z.infer<typeof shippingAddressSchema>, 'country'>}) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter country" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
                <Button type="submit" disabled={isPending}>
                    {isPending ? (
                        <Loader className="w-4 h-4 animate-spin"/>
                    ) : (<ArrowRight className="w-4 h-4"/>)}{' '}Continue
                </Button>
                  
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ShippingAddressForm;

