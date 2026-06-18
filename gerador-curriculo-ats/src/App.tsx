import React, { useState } from 'react';

// Interface para tipagem dos dados do currículo
interface ResumeData {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  lattes: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
}

export default function App() {
  const [data, setData] = useState<ResumeData>({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    lattes: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrint = () => {
    window.print();
  };

  // Auxiliar para renderizar os contatos com divisores inline no modo de impressão
  const renderContactInfo = () => {
    const infos: React.ReactNode[] = [];

    if (data.email) infos.push(<span key="email">{data.email}</span>);
    if (data.phone) infos.push(<span key="phone">{data.phone}</span>);
    if (data.linkedin) infos.push(<span key="linkedin">LinkedIn: {data.linkedin}</span>);
    if (data.github) infos.push(<span key="github">GitHub: {data.github}</span>);
    if (data.lattes) infos.push(<span key="lattes">Lattes: {data.lattes}</span>);

    return infos.reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, <span key={`div-${i}`} className="mx-2">|</span>, curr], [] as React.ReactNode[]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* LADO ESQUERDO: FORMULÁRIO COM ROLAGEM CORRIGIDA */}
      <div className="w-full md:w-1/2 p-8 bg-white shadow-md md:h-screen md:overflow-y-auto print:hidden">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Gerador de Currículo ATS</h1>
        
        {/* 🔒 AVISO DE PRIVACIDADE E SEGURANÇA LOCAL */}
        <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded-md text-xs text-blue-800 flex items-start gap-2.5 shadow-sm">
          <span className="text-sm mt-0.5">🔒</span>
          <p className="leading-relaxed">
            <strong>Sua privacidade garantida:</strong> Este sistema não possui banco de dados. Todos os dados digitados permanecem temporariamente na memória do seu navegador e são destruídos permanentemente ao fechar ou atualizar esta página.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Dados Pessoais */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Dados Pessoais</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ex: Ariane Kelly Ribeiro"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefone</label>
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">LinkedIn (Usuário)</label>
                <input
                  type="text"
                  name="linkedin"
                  value={data.linkedin}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">GitHub (Usuário)</label>
                <input
                  type="text"
                  name="github"
                  value={data.github}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Currículo Lattes</label>
                <input
                  type="text"
                  name="lattes"
                  value={data.lattes}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Perfil Profissional */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Resumo Profissional</h2>
            <textarea
              name="summary"
              value={data.summary}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Breve resumo destacando suas principais competências e objetivos..."
            />
          </div>

          {/* Experiências */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Experiência Profissional</h2>
            <textarea
              name="experience"
              value={data.experience}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Cargo, Empresa (Ano - Ano)&#10;• Atividade ou conquista realizada..."
            />
          </div>

          {/* Formação */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Formação Acadêmica</h2>
            <textarea
              name="education"
              value={data.education}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Curso - Instituição (Ano de Conclusão)"
            />
          </div>

          {/* Competências */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Habilidades e Competências</h2>
            <textarea
              name="skills"
              value={data.skills}
              onChange={handleChange}
              rows={2}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: React, TypeScript, Python, Recrutamento Técnico, LGPD..."
            />
          </div>

          {/* Ação de Exportar */}
          <button
            type="button"
            onClick={handlePrint}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-200 shadow"
          >
            Imprimir ou Salvar em PDF
          </button>
        </form>
      </div>

      {/* LADO DIREITO: PRÉ-VISUALIZAÇÃO */}
      <div className="w-full md:w-1/2 p-12 bg-gray-200 min-h-screen flex justify-center items-start overflow-y-auto print:p-0 print:bg-white print:w-full">
        <div className="bg-white p-12 shadow-lg w-full max-w-[21cm] min-h-[29.7cm] text-gray-900 font-sans text-sm border border-gray-300 print:border-none print:shadow-none print:p-0">
          
          {/* Cabeçalho do Currículo */}
          <div className="text-center space-y-2 border-b-2 border-gray-800 pb-4">
            <h1 className="text-2xl font-bold uppercase tracking-wide">{data.name || 'Seu Nome Completo'}</h1>
            <div className="text-xs text-gray-600 flex flex-wrap justify-center content-center max-w-xl mx-auto">
              {renderContactInfo().length > 0 ? renderContactInfo() : 'suas-informacoes@contato.com | (00) 00000-0000'}
            </div>
          </div>

          {/* Corpo do Currículo */}
          <div className="mt-6 space-y-6">
            {data.summary && (
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">Resumo Profissional</h3>
                <p className="text-gray-700 text-justify leading-relaxed whitespace-pre-line">{data.summary}</p>
              </div>
            )}

            {data.experience && (
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">Experiência Profissional</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.experience}</p>
              </div>
            )}

            {data.education && (
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">Formação Acadêmica</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.education}</p>
              </div>
            )}

            {data.skills && (
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">Principais Competências</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{data.skills}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
