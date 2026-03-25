import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://imoaeuefhblivruvrfyd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltb2FldWVmaGJsaXZydXZyZnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0NTQ1NTAsImV4cCI6MjA5MDAzMDU1MH0.tQ1Iv9tbhX6tcZT8W5JMpNRyxpLStxmySGowHm9KKhI'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  console.log('Testing Supabase Connection...')
  try {
    const { data, error } = await supabase.from('leads').select('*').limit(1)
    if (error) {
      console.error('❌ Supabase Error:', error.message)
      if (error.message.includes('FetchError') || error.message.includes('Failed to fetch')) {
        console.log('💡 TIP: This usually means the URL is incorrect or the project is paused.')
      }
    } else {
      console.log('✅ Connection Successful! Data:', data)
    }
  } catch (err) {
    console.error('❌ Unexpected Error:', err.message)
  }
}

testConnection()
