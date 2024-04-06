import { supabase } from '@/supabase/client';
import moment from 'moment';

export const getWOD = async () => {
  try {
    const WOD = await supabase.from('word_of_day').select('*, words(value)').eq('created_at', moment().utc().format());
    // console.log(moment().utc().format());

    return WOD.data;
  } catch (error) {
    console.log(error);
  }
};
