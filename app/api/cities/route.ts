//Users/alonondanse/Schädlingsbekämpfung/app/api/cities/route.ts
import { NextResponse } from 'next/server';
import { fetchLocations } from '@/lib/api';

export async function GET() {
  try {
    // Fetch cities from ZIP API
    const cities = await fetchLocations();
    
    // Return cities as JSON response
    return NextResponse.json({ cities });
  } catch (error) {
    console.error('Error fetching cities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cities' },
      { status: 500 }
    );
  }
}