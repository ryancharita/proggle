import { supabase } from '@/supabase/client';
import { generateRandomNumber } from '@/helpers/general';
import moment from 'moment';

export const generateWOD = async () => {
  try {
    const wodList = await supabase
      .from('word_of_day')
      .select('id')
      .eq('created_at', moment().utc().format('YYYY-MM-DD'));
    console.log(wodList.data?.length === 0);

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
      console.log('here', num, list?.data?.[num]);
      return [WOD];
    }
    return wodList;
  } catch (error) {
    console.log(error);
  }
};

export const getWOD = async () => {
  try {
    const WOD = await supabase.from('word_of_day').select('*, words(value)').eq('created_at', moment().utc().format());
    // console.log(moment().utc().format());

    return WOD.data;
  } catch (error) {
    console.log(error);
  }
};
