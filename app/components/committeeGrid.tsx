// components/CommitteeMember.tsx
import Image from 'next/image';

type CommitteeMemberProps = {
  name: string;
  title: string;
  imageUrl: string;
};

export default function CommitteeMember({ name, title, imageUrl }: CommitteeMemberProps) {
  return (
    <div className="p-4 m-2 bg-white shadow-lg rounded-lg">
      <div className="relative w-32 h-32 mx-auto">
        <Image src={imageUrl} alt={`Photo of ${name}`} layout="fill" objectFit="cover" className="rounded-full" />
      </div>
      <div className="text-center mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{title}</p>
      </div>
    </div>
  );
}
