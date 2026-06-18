import React, { useState } from 'react';
import { ShieldCheck, Plus, Trash2, Download } from 'lucide-react';

// Interfaces para os dados dinâmicos do currículo
interface Formacao {
  id: string;
  curso: string;
  instituicao: string;
  ano: string;
}

interface Experiencia {
  id: string;
  cargo: string;
  empresa: string;
  periodo: string;
  atividades: string;
}

interface DadosCurriculo {
  nome: string;
  cargoAlvo: string;
  email: string;
  telefone: string;
  linkedin: string;
  github: string;
  lattes: string;
  resumo: string;
  competencias: string[];
  idiomas: string[];
  formacoes: Formacao[];
  experiencias: Experiencia[];
}

export default function App() {
  // Estado inicial com dados baseados no seu modelo anterior
  const [data, setData] = useState<DadosCurriculo>({
    nome: 'ARIANE KELLY RIBEIRO DOS SANTOS',
    cargoAlvo: 'Tech Recruiter',
    email: 'arianeribeiro.headhunter@gmail.com',
    telefone: '(00) 00000-0000',
    linkedin: '',
    github: '',
    lattes: '',
    resumo: 'Sou tech recruiter, há 2 anos...',
    competencias: ['Hunting', 'Busca booleana', 'Gestão de Ats', 'Método Disc', 'Recrutamento e Seleção'],
    idiomas: ['Português (Nativo)'],
    formacoes: [
      { id: '1', curso: 'Análise e Desenvolvimento de Sistemas', instituicao: 'Unifatecie', ano: '2026 - 2028' },
      { id: '2', curso: 'Gestão Financeira', instituicao: 'Unifatecie', ano: '2023 - 2025' }
    ],
    experiencias: [
      { id: '1', cargo: 'Tech Recruiter', empresa: 'Ak Talent', periodo: 'Jan/2025 - Atual', atividades: 'Recrutamento e Seleção\nOnboarding\nFolha de Pagamento' }
    ]
  });

  // Estados auxiliares para novos inputs de listas simples
  const [novaCompetencia, setNovaCompetencia] = useState('');
  const [novoIdioma, setNovoIdioma] = useState('');

  // Funções de manipulação do estado
  const handleInputChange = (field: keyof DadosCurriculo, value: any) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormacaoChange = (id: string, field: keyof Formacao, value: string) => {
    setData(prev => ({
      ...prev,
      formacoes: prev.formacoes.map(f => f.id === id ? { ...f, [field]: value } : f)
    }));
  };

  const addFormacao = () => {
    const nova: Formacao = { id: Date.now().toString(), curso: '', instituicao: '', ano: '' };
    setData(prev => ({ ...prev, formacoes: [...prev.formacoes, nova] }));
  };

  const removeFormacao = (id: string) => {
    setData(prev => ({ ...prev, formacoes: prev.formacoes.filter(f => f.id !== id) }));
  };

  const handleExperienciaChange = (id: string, field: keyof Experiencia, value: string) => {
    setData(prev => ({
      ...prev,
      experiencias: prev.experiencias.map(e => e.id === id ? { ...e, [field]: value } : e)
    }));
  };

  const addExperiencia = () => {
    const nova: Experiencia = { id: Date.now().toString(), cargo: '', empresa: '', periodo: '', atividades: '' };
    setData(prev => ({ ...prev, experiencias: [...prev.experiencias, nova] }));
  };

  const removeExperiencia = (id: string) => {
    setData(prev => ({ ...prev, experiencias: prev.experiencias.filter(e => e.id !== id) }));
  };

  const addCompetencia = () => {
    if (novaCompetencia.trim()) {
      setData(prev => ({ ...prev, competencias: [...prev.competencias, novaCompetencia.trim()] }));
      setNovaCompetencia('');
    }
  };

  const removeCompetencia = (index: number) => {
    setData(prev => ({ ...prev, competencias: prev.competencias.filter((_, i) => i !== index) }));
  };

  const addIdioma = () => {
    if (novoIdioma.trim()) {
      setData(prev => ({ ...prev, idiomas: [...prev.idiomas, novoIdioma.trim()] }));
      setNovoIdioma('');
    }
  };

  const removeIdioma = (index: number) => {
    setData(prev => ({ ...prev, idiomas: prev.idiomas.filter((_, i) => i !== index) }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800 overflow-hidden print:bg-white print:h-auto">
      
      {/* PAINEL ESQUERDO: FORMULÁRIO (Com rolagem independente) */}
      <div className="w-1/2 h-full overflow-y-auto p-6 bg-white border-r border-gray-200 flex flex-col gap-6 print:hidden">
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gerador de Currículo ATS</h1>
        </div>

        {/* Bloco de Privacidade Garantida */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3 items-start">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-sm text-blue-900 leading-relaxed">
            <span className="font-semibold">Sua privacidade garantida:</span> Este sistema não possui banco de dados. Todos os dados digitados permanecem temporariamente na memória do seu navegador e são destruídos permanentemente ao fechar ou atualizar esta página.
          </p>
        </div>

        {/* SEÇÃO: Dados Pessoais */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold border-b pb-1 text-gray-700">Dados Pessoais</h2>
          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Nome Completo</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={data.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Cargo Alvo</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={data.cargoAlvo}
              onChange={(e) => handleInputChange('cargoAlvo', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">E-mail</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={data.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Telefone</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={data.telefone}
                onChange={(e) => handleInputChange('telefone', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">LinkedIn (Usuário)</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={data.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">GitHub (Usuário)</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={data.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Currículo Lattes</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={data.lattes}
                onChange={(e) => handleInputChange('lattes', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* SEÇÃO: Resumo Profissional */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold border-b pb-1 text-gray-700">Resumo Profissional</h2>
          <textarea 
            rows={3}
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            value={data.resumo}
            onChange={(e) => handleInputChange('resumo', e.target.value)}
          />
        </div>

        {/* SEÇÃO: Formação Acadêmica (DURÁVEL / DINÂMICA) */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b pb-1">
            <h2 className="text-lg font-semibold text-gray-700">Formação Acadêmica</h2>
            <button 
              onClick={addFormacao}
              className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition"
            >
              <Plus className="w-3 h-3" /> Adicionar
            </button>
          </div>

          {data.formacoes.map((formacao) => (
            <div key={formacao.id} className="p-3 bg-gray-50 border rounded-md flex flex-col gap-3 relative group">
              <button 
                onClick={() => removeFormacao(formacao.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 opacity-60 group-hover:opacity-100 transition"
                title="Excluir formação"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-2 gap-3 pr-6">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500">Curso / Grau</label>
                  <input 
                    type="text"
                    className="border border-gray-300 rounded p-1.5 text-sm bg-white"
                    value={formacao.curso}
                    onChange={(e) => handleFormacaoChange(formacao.id, 'curso', e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500">Instituição</label>
                  <input 
                    type="text"
                    className="border border-gray-300 rounded p-1.5 text-sm bg-white"
                    value={formacao.instituicao}
                    onChange={(e) => handleFormacaoChange(formacao.id, 'instituicao', e.target.value)}
                  />
                </div>
              </div>
              <div className="w-1/3">
                <label className="text-xs font-medium text-gray-500">Ano / Período</label>
                <input 
                  type="text"
                  className="border border-gray-300 rounded p-1.5 text-sm bg-white w-full"
                  placeholder="Ex: 2024 - 2026"
                  value={formacao.ano}
                  onChange={(e) => handleFormacaoChange(formacao.id, 'ano', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* SEÇÃO: Experiência Profissional (DURÁVEL / DINÂMICA) */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b pb-1">
            <h2 className="text-lg font-semibold text-gray-700">Experiência Profissional</h2>
            <button 
              onClick={addExperiencia}
              className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition"
            >
              <Plus className="w-3 h-3" /> Adicionar
            </button>
          </div>

          {data.experiencias.map((exp) => (
            <div key={exp.id} className="p-3 bg-gray-50 border rounded-md flex flex-col gap-3 relative group">
              <button 
                onClick={() => removeExperiencia(exp.id)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700 opacity-60 group-hover:opacity-100 transition"
                title="Excluir experiência"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-2 gap-3 pr-6">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500">Cargo</label>
                  <input 
                    type="text"
                    className="border border-gray-300 rounded p-1.5 text-sm bg-white"
                    value={exp.cargo}
                    onChange={(e) => handleExperienciaChange(exp.id, 'cargo', e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-500">Empresa</label>
                  <input 
                    type="text"
                    className="border border-gray-300 rounded p-1.5 text-sm bg-white"
                    value={exp.empresa}
                    onChange={(e) => handleExperienciaChange(exp.id, 'empresa', e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500">Período</label>
                <input 
                  type="text"
                  className="border border-gray-300 rounded p-1.5 text-sm bg-white w-1/2"
                  placeholder="Ex: Jan/2025 - Atual"
                  value={exp.periodo}
                  onChange={(e) => handleExperienciaChange(exp.id, 'periodo', e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500">Atividades e Conquistas (Uma por linha)</label>
                <textarea 
                  rows={3}
                  className="border border-gray-300 rounded p-1.5 text-sm bg-white resize-none"
                  value={exp.atividades}
                  onChange={(e) => handleExperienciaChange(exp.id, 'atividades', e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* SEÇÃO: Competências */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold border-b pb-1 text-gray-700">Competências / Tecnologias</h2>
          <div className="flex gap-2">
            <input 
              type="text"
              className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
              placeholder="Adicione uma competência"
              value={novaCompetencia}
              onChange={(e) => setNovaCompetencia(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addCompetencia()}
            />
            <button onClick={addCompetencia} className="bg-gray-800 hover:bg-gray-900 text-white px-3 rounded-md text-sm transition">
              Incluir
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {data.competencias.map((comp, index) => (
              <span key={index} className="bg-gray-100 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-full text-xs flex items-center gap-1.5">
                {comp}
                <button onClick={() => removeCompetencia(index)} className="text-gray-400 hover:text-red-500 font-bold">×</button>
              </span>
            ))}
          </div>
        </div>

        {/* SEÇÃO: Idiomas */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold border-b pb-1 text-gray-700">Idiomas</h2>
          <div className="flex gap-2">
            <input 
              type="text"
              className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
              placeholder="Ex: Inglês (Intermediário)"
              value={novoIdioma}
              onChange={(e) => setNovoIdioma(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addIdioma()}
            />
            <button onClick={addIdioma} className="bg-gray-800 hover:bg-gray-900 text-white px-3 rounded-md text-sm transition">
              Incluir
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {data.idiomas.map((idioma, index) => (
              <span key={index} className="bg-gray-100 border border-gray-200 text-gray-700 px-2.5 py-1 rounded-full text-xs flex items-center gap-1.5">
                {idioma}
                <button onClick={() => removeIdioma(index)} className="text-gray-400 hover:text-red-500 font-bold">×</button>
              </span>
            ))}
          </div>
        </div>

        {/* Botão de Impressão Final no Rodapé do formulário */}
        <button 
          onClick={handlePrint}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition mt-4"
        >
          <Download className="w-5 h-5" /> Imprimir ou Salvar em PDF
        </button>

      </div>

      {/* PAINEL DIREITO: VISUALIZAÇÃO DO CURRÍCULO (Fica intacto na tela e centraliza na impressão) */}
      <div className="w-1/2 h-full overflow-y-auto p-8 bg-gray-500 flex justify-center print:w-full print:h-auto print:bg-white print:p-0">
        
        {/* Folha A4 do Currículo */}
        <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl p-[20mm] flex flex-col gap-6 print:shadow-none print:p-0 font-sans text-gray-900">
          
          {/* Cabeçalho do Currículo */}
          <div className="text-center flex flex-col gap-2">
            <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-900">{data.nome || 'SEU NOME COMPLETO'}</h1>
            {data.cargoAlvo && <p className="text-sm italic text-gray-600 font-medium">{data.cargoAlvo}</p>}
            
            <div className="text-xs text-gray-500 flex justify-center flex-wrap gap-x-4 gap-y-1 mt-1">
              {data.email && <span>{data.email}</span>}
              {data.telefone && <span>• {data.telefone}</span>}
              {data.linkedin && <span>• linkedin.com/in/{data.linkedin}</span>}
              {data.github && <span>• github.com/{data.github}</span>}
              {data.lattes && <span>• lattes:{data.lattes}</span>}
            </div>
          </div>

          <hr className="border-gray-800 border-t-2" />

          {/* Renderização: Resumo Profissional */}
          {data.resumo && (
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5">Resumo Profissional</h3>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{data.resumo}</p>
            </div>
          )}

          {/* Renderização: Formação Acadêmica */}
          {data.formacoes.length > 0 && (
            <div className="flex flex-col gap-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5">Formação Acadêmica</h3>
              <div className="flex flex-col gap-2">
                {data.formacoes.map((formacao) => (
                  <div key={formacao.id} className="flex justify-between items-baseline text-sm">
                    <div className="text-gray-700">
                      <span className="font-semibold">{formacao.curso}</span>
                      {formacao.instituicao && <span> — {formacao.instituicao}</span>}
                    </div>
                    <span className="text-xs text-gray-500 shrink-0 font-medium">{formacao.ano}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Renderização: Experiência Profissional */}
          {data.experiencias.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5">Experiência Profissional</h3>
              <div className="flex flex-col gap-4">
                {data.experiencias.map((exp) => (
                  <div key={exp.id} className="flex flex-col gap-1">
                    <div className="flex justify-between items-baseline text-sm">
                      <div className="text-gray-700">
                        <span className="font-semibold">{exp.cargo}</span>
                        {exp.empresa && <span> — {exp.empresa}</span>}
                      </div>
                      <span className="text-xs text-gray-500 shrink-0 font-medium">{exp.periodo}</span>
                    </div>
                    {exp.atividades && (
                      <ul className="list-disc list-inside text-sm text-gray-600 flex flex-col gap-0.5 pl-1">
                        {exp.atividades.split('\n').map((linha, idx) => (
                          linha.trim() && <li key={idx} className="leading-relaxed">{linha}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Renderização: Competências */}
          {data.competencias.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5">Principais Competências</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {data.competencias.join(', ')}
              </p>
            </div>
          )}

          {/* Renderização: Idiomas */}
          {data.idiomas.length > 0 && (
            <div className="flex flex-col gap-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-0.5">Idiomas</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {data.idiomas.join(', ')}
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
