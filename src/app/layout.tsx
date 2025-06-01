
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/contexts/auth-context';
import { LeaveProvider } from '@/contexts/leave-context'; // Added

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CLMS BUIDCO',
  description: 'Casual Leave Management System for BUIDCO',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font links removed, Inter is now handled by next/font */}
      </head>
      <body className={`${inter.className} font-body antialiased`}>
        <AuthProvider>
          <LeaveProvider> {/* Added LeaveProvider */}
            {children}
            <Toaster />
          </LeaveProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
