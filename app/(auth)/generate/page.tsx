'use server';
import { generateWOD } from '@/lib/actions/word-of-the-day';

const ListOfWords = async () => {
  async function chooseWOD() {
    'use server';

    await generateWOD();
  }

  return (
    <div className="flex justify-between p-2 hover:bg-gray-800/80">
      {/* Note: For actions to work, they have to be IN a form. The action itself can be bound at either via form action={thing} OR button formAction={thing} */}
      <form>
        <button formAction={chooseWOD} className="border p-2 font-bold text-red-300">
          choose WOD
        </button>
      </form>
    </div>
  );
};

export default ListOfWords;
