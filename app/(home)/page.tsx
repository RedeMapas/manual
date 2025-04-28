import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Tire todas suas dúvidas</h1>
      <p className="text-fd-muted-foreground">
        Você pode abrir{' '}
        <Link
          href="/docs/usuarios/intro"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        e ver a documentação para pessoas desenvolvedoras.
      </p>
    </main>
  );
}
