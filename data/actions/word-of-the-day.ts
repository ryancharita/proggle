import 'server-only';
import { supabase } from '@/supabase/client';
import { generateRandomNumber } from '@/helpers/general';
import moment from 'moment';

export const generateWOD = async () => {
  try {
    const wodList = await supabase
      .from('word_of_day')
      .select('id')
      .eq('created_at', moment().utc().format('YYYY-MM-DD'));

    if (wodList.data?.length === 0) {
      const list = await supabase.from('words').select('id').eq('available', true);
      const num = generateRandomNumber((list?.data?.length || 1) - 1);
      const WOD = list?.data?.[num];
      if (WOD?.id) {
        await supabase
          .from('word_of_day')
          .insert([{ wordId: WOD?.id, created_at: moment().utc().format('YYYY-MM-DD') }]);
        const newWOD = await supabase.from('words').update({ available: false }).eq('id', WOD?.id).select();
        return newWOD;
      }
      return WOD;
    }
    return wodList;
  } catch (error) {
    console.log(error);
  }
};
