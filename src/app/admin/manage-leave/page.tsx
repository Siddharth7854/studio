"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AppLayout from '@/components/layout/app-layout';
import ManageLeaveTable from '@/components/admin/manage-leave-table';
import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Loader2 } from 'lucide-react';

export default function ManageLeavePage() {
  const { isAdmin, isLoading: authLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      router.replace('/dashboard'); // Redirect non-admins
    }
  }, [isAdmin, authLoading, router]);

  if (authLoading) {
    return (
      <AppLayout>
        <div className="flex justify-center items-center h-full">
           <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
          <p className="text-muted-foreground">Loading admin page...</p>
        </div>
      </AppLayout>
    );
  }

  if (!isAdmin) {
    // This check is mostly for client-side redirect visual, useEffect handles actual redirect
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center h-full p-4">
          <Card className="w-full max-w-md text-center shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-destructive">
                <AlertTriangle className="h-8 w-8" />
                Access Denied
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You do not have permission to access this page. Redirecting...
              </p>
            </CardContent>
          </Card>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Leave Requests</h1>
        <ManageLeaveTable />
      </div>
    </AppLayout>
  );
}