import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://imoaeuefhblivruvrfyd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltb2FldWVmaGJsaXZydXZyZnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NTQ1NTAsImV4cCI6MjA5MDAzMDU1MH0.tQ1Iv9tbhX6tcZT8W5JMpNRyxpLStxmySGowHm9KKhI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testInsert() {
  console.log('--- Testing Lead Insertion ---')
  
  // Exactly what QuoteForm sends
  const payload = {
    name: 'Test Debug User',
    phone: '1234567890',
    email: 'test@debug.com',
    message: 'Testing from scratchpad',
    service_type: 'Industrial Roofing',
    source: 'Quote Form',
    created_at: new Date().toISOString()
  };

  console.log('Payload:', JSON.stringify(payload, null, 2));

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([payload]);

    if (error) {
      console.error('❌ Insertion Failed!');
      console.error('Error Code:', error.code);
      console.error('Error Message:', error.message);
      console.error('Error Hint:', error.hint || 'No hint provided');
      console.error('Error Details:', error.details || 'No details provided');
    } else {
      console.log('✅ Insertion Successful!');
      console.log('Returned Data:', data);
    }
  } catch (err) {
    console.error('❌ Network/Unexpected Error:', err.message);
  }
}

testInsert()
