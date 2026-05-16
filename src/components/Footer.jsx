export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-white/10 p-6 mt-12">
      <div className="max-w-4xl mx-auto text-center text-gray-400 text-sm">
        <p>Desenvolvido por Felipe &copy; {new Date().getFullYear()}</p>
        <p className="mt-1 text-xs text-gray-500">
          Este é um projeto de portfólio. Os treinos são gerados por Inteligência Artificial.
        </p>
      </div>
    </footer>
  );
}
