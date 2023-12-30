import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json({ message: 'Hi Mom!' });
};

// POST API
export const POST = () => {};

// PATCH API
export const PATCH = () => {};

// DELETE API
export const DELETE = () => {};
