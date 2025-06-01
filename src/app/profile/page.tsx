"use client";

import React from 'react';
import AppLayout from '@/components/layout/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/use-auth';
import { UserCircle, Mail, Building2, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <AppLayout>
      <div className="container max-w-2xl mx-auto py-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center gap-2">
              <UserCircle className="h-6 w-6 text-primary" />
              Profile Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <Image
                  src={user?.profilePhotoUrl || "https://placehold.co/100x100.png"}
                  alt="Profile"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <Button 
                  size="sm" 
                  className="absolute bottom-0 right-0"
                  variant="outline"
                >
                  Change
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <Input
                    id="name"
                    defaultValue={user?.name}
                    className="pl-10"
                  />
                  <UserCircle className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user?.email}
                    className="pl-10"
                  />
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="employeeId">Employee ID</Label>
                <div className="relative">
                  <Input
                    id="employeeId"
                    defaultValue={user?.employeeId}
                    className="pl-10"
                    disabled
                  />
                  <BadgeCheck className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="designation">Designation</Label>
                <div className="relative">
                  <Input
                    id="designation"
                    defaultValue={user?.designation}
                    className="pl-10"
                  />
                  <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>

              <Button className="w-full mt-6">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}