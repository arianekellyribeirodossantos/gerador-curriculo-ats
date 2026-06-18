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
  atividades: string[];
}

interface CursoComplementar {
  id: string;
  nome: string;
  instituicao: string;
  ano: string;
}

export default function App() {
  // Estados do Formulário
  const [nome, setNome] = useState('ARIANE KELLY RIBEIRO DOS SANTOS');
  const [cargoAlvo, setCargoAlvo] = useState('Tech Recruiter');
  const [email, setEmail] = useState('arianeribeiro.headhunter@gmail.com');
  const [telefone, setTelefone] = useState('(00) 00000-0000');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [lattes, setLattes] = useState('');
  const [resumo, setResumo] = useState('Sou tech recruiter, há 2 anos...');

  // Estados das listas dinâmicas
  const [formacoes, setFormacoes] = useState<Formacao[]>([
    { id: '1', curso: 'Análise e Desenvolvimento de Sistemas', instituicao: 'Unifatecie', ano: '2026 - 2028' },
    { id: '2', curso: 'Gestão Financeira', instituicao: 'Unifatecie', ano: '2023 - 2025' }
  ]);

  const [experiencias, setExperiencias] = useState<Experiencia[]>([
    {
      id: '1',
      cargo: 'Tech Recruiter',
      empresa: 'Ak Talent',
      periodo: 'Jan/2025 - Atual',
      atividades: ['Recrutamento e Seleção', 'Onboarding', 'Folha de Pagamento']
    }
  ]);

  const [competencias, setCompetencias] = useState<string[]>([
    'Hunting', 'Busca booleana', 'Gestão de Ats', 'Método Disc', 'Recrutamento e Seleção'
  ]);

  const [idiomas, setIdiomas] = useState<string[]>(['Português (Nativo)']);

  const [cursos, setCursos] = useState<CursoComplementar[]>([
    { id: '1', nome: 'Formação Headhunter', instituicao: 'TMB Educação', ano: '2025' }
  ]);

  // --- FUNÇÕES DE MANIPULAÇÃO ---

  // Formações
  const adicionarFormacao = () => {
    setFormacoes([...formacoes, { id: Date.now().toString(), curso: '', instituicao: '', ano: '' }]);
  };
  const removerFormacao = (id: string) => {
    setFormacoes(formacoes.filter(f => f.id !== id));
  };
  const handleFormacaoChange = (id: string, campo: keyof Formacao, valor: string) => {
    setFormacoes(formacoes.map(f => f.id === id ? { ...f, [campo]: valor } : f));
  };

  // Experiências
  const adicionarExperiencia = () => {
    setExperiencias([...experiencias, { id: Date.now().toString(), cargo: '', empresa: '', periodo: '', atividades: [''] }]);
  };
  const removerExperiencia = (id: string) => {
    setExperiencias(experiencias.filter(e => e.id !== id));
  };
  const handleExperienciaChange = (id: string, campo: keyof Omit<Experiencia, 'atividades'>, valor: string) => {
    setExperiencias(experiencias.map(e => e.id === id ? { ...e, [campo]: valor } : e));
  };
  const handleAtividadeChange = (expId: string, index: number, valor: string) => {
    setExperiencias(experiencias.map(e => {
      if (e.id === expId) {
        const novasAtividades = [...e.atividades];
        novasAtividades[index] = valor;
        return { ...e, atividades: novasAtividades };
      }
      return e;
    }));
  };
  const adicionarAtividade = (expId: string) => {
    setExperiencias(experiencias.map(e => e.id === expId ? { ...e, atividades: [...e.atividades, ''] } : e));
  };
  const removerAtividade = (expId: string, index: number) => {
    setExperiencias(experiencias.map(e => e.id === expId ? { ...e, atividades: e.atividades.filter((_, i) => i !== index) } : e));
  };

  // Competências
  const handleCompetenciaChange = (index: number, valor: string) => {
    const novas = [...competencias];
    novas[index] = valor;
    setCompetencias(novas);
  };
  const adicionarCompetencia = () => setCompetencias([...competencias, '']);
  const removerCompetencia = (index: number) => setCompetencias(competencias.filter((_, i) => i !== index));

  // Idiomas
  const handleIdiomaChange = (index: number, valor: string) => {
    const novos = [...idiomas];
    novas[index] = valor;
    setIdiomas(novos);
  };
  const adicionarIdioma = () => setIdiomas([...idiomas, '']);
  const removerIdioma = (index: number) => setIdiomas(idiomas.filter((_, i) => i !== index));

  // Cursos Complementares
  const adicionarCurso = () => {
    setCursos([...cursos, { id: Date.now().toString(), nome: '', instituicao: '', ano: '' }]);
  };
  const removerCurso = (id: string) => {
    setCursos(cursos.filter(c => c.id !== id));
  };
  const handleCursoChange = (id: string, campo: keyof CursoComplementar, valor: string) => {
    setCursos(cursos.map(c => c.id === id ? { ...c, [campo]: valor } : c));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 overflow-hidden print:bg-white print:h-auto print:overflow-visible">
      
      {/* PAINEL ESQUERDO: FORMULÁRIO (Escondido na impressão) */}
      <div className="w-full md:w-1/2 p-6 overflow-y-auto h-full bg-white border-r border-gray-200 print:hidden flex flex-col gap-6">
        
        {/* CARD DE PRIVACIDADE FIXO NO TOPO DO FORMULÁRIO */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <ShieldCheck className="text-blue-600 flex-shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-blue-900 leading-relaxed">
            <span className="font-bold">Sua privacidade garantida:</span> Este sistema não possui banco de dados. Todos os dados digitados permanecem temporariamente na memória do seu navegador e são destruídos permanentemente ao fechar ou atualizar esta página.
          </div>
        </div>

        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800">Gerador de Currículo ATS</h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
          >
            <Download size={18} /> Imprimir / Salvar PDF
          </button>
        </div>

        {/* Dados Pessoais */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Dados Pessoais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Nome Completo</label>
              <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Cargo Alvo</label>
              <input type="text" value={cargoAlvo} onChange={(e) => setCargoAlvo(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">E-mail</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">Telefone</label>
              <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">LinkedIn (Usuário)</label>
              <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="ex: fulano-detal" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">GitHub (Usuário)</label>
              <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="ex: fulanodev" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">Currículo Lattes (Link Completo)</label>
              <input type="text" value={lattes} onChange={(e) => setLattes(e.target.value)} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="http://lattes.cnpq.br/..." />
            </div>
          </div>
        </div>

        {/* Resumo Profissional */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 border-b pb-2 mb-4">Resumo Profissional</h2>
          <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} rows={4} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
        </div>

        {/* Formação Acadêmica */}
        <div>
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Formação Acadêmica</h2>
            <button onClick={adicionarFormacao} className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700">
              <Plus size={16} /> Adicionar
            </button>
          </div>
          {formacoes.map((form) => (
            <div key={form.id} className="p-4 border rounded mb-4 bg-gray-50 relative">
              <button onClick={() => removerFormacao(form.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </button>
              <div className="grid grid-cols-1 gap-3">
                <input type="text" placeholder="Curso (Ex: Bacharelado em Economia)" value={form.curso} onChange={(e) => handleFormacaoChange(form.id, 'curso', e.target.value)} className="p-2 border rounded text-sm" />
                <input type="text" placeholder="Instituição (Ex: Unifatecie)" value={form.instituicao} onChange={(e) => handleFormacaoChange(form.id, 'instituicao', e.target.value)} className="p-2 border rounded text-sm" />
                <input type="text" placeholder="Período/Ano de Conclusão (Ex: 2023 - 2025)" value={form.ano} onChange={(e) => handleFormacaoChange(form.id, 'ano', e.target.value)} className="p-2 border rounded text-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Experiência Profissional */}
        <div>
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Experiência Profissional</h2>
            <button onClick={adicionarExperiencia} className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700">
              <Plus size={16} /> Adicionar
            </button>
          </div>
          {experiencias.map((exp) => (
            <div key={exp.id} className="p-4 border rounded mb-4 bg-gray-50 relative">
              <button onClick={() => removerExperiencia(exp.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </button>
              <div className="grid grid-cols-1 gap-3 mb-3">
                <input type="text" placeholder="Cargo" value={exp.cargo} onChange={(e) => handleExperienciaChange(exp.id, 'cargo', e.target.value)} className="p-2 border rounded text-sm" />
                <input type="text" placeholder="Empresa" value={exp.empresa} onChange={(e) => handleExperienciaChange(exp.id, 'empresa', e.target.value)} className="p-2 border rounded text-sm" />
                <input type="text" placeholder="Período (Ex: Jan/2025 - Atual)" value={exp.periodo} onChange={(e) => handleExperienciaChange(exp.id, 'periodo', e.target.value)} className="p-2 border rounded text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Principais Atividades</label>
                {exp.atividades.map((atv, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input type="text" value={atv} onChange={(e) => handleAtividadeChange(exp.id, i, e.target.value)} className="w-full p-1.5 border rounded text-sm" placeholder="Descreva uma atividade relevante" />
                    <button onClick={() => removerAtividade(exp.id, i)} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                  </div>
                ))}
                <button onClick={() => adicionarAtividade(exp.id)} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300 mt-1 flex items-center gap-1">
                  <Plus size={12} /> Adicionar Atividade
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cursos Complementares / Certificações */}
        <div>
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Cursos Complementares / Certificações</h2>
            <button onClick={adicionarCurso} className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700">
              <Plus size={16} /> Adicionar
            </button>
          </div>
          {cursos.map((curso) => (
            <div key={curso.id} className="p-4 border rounded mb-4 bg-gray-50 relative">
              <button onClick={() => removerCurso(curso.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </button>
              <div className="grid grid-cols-1 gap-3">
                <input type="text" placeholder="Nome do Curso / Certificado" value={curso.nome} onChange={(e) => handleCursoChange(curso.id, 'nome', e.target.value)} className="p-2 border rounded text-sm" />
                <input type="text" placeholder="Instituição" value={curso.instituicao} onChange={(e) => handleCursoChange(curso.id, 'instituicao', e.target.value)} className="p-2 border rounded text-sm" />
                <input type="text" placeholder="Ano de Conclusão (Ex: 2026)" value={curso.ano} onChange={(e) => handleCursoChange(curso.id, 'ano', e.target.value)} className="p-2 border rounded text-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Principais Competências */}
        <div>
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Principais Competências</h2>
            <button onClick={adicionarCompetencia} className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700">
              <Plus size={16} /> Adicionar
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {competencias.map((comp, idx) => (
              <div key={idx} className="flex gap-2">
                <input type="text" value={comp} onChange={(e) => handleCompetenciaChange(idx, e.target.value)} className="w-full p-2 border rounded text-sm" />
                <button onClick={() => removerCompetencia(idx)} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
              </div>
            ))}
          </div>
        </div>

        {/* Idiomas */}
        <div>
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Idiomas</h2>
            <button onClick={adicionarIdioma} className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700">
              <Plus size={16} /> Adicionar
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {idiomas.map((idioma, idx) => (
              <div key={idx} className="flex gap-2">
                <input type="text" value={idioma} onChange={(e) => handleIdiomaChange(idx, e.target.value)} className="w-full p-2 border rounded text-sm" />
                <button onClick={() => removerIdioma(idx)} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* PAINEL DIREITO: PREVIEW DO CURRÍCULO (A4 Otimizado para Impressão/ATS) */}
      <div className="w-full md:w-1/2 p-6 overflow-y-auto h-full bg-gray-200 flex justify-center print:p-0 print:bg-white print:h-auto print:overflow-visible">
        <div className="w-[210mm] min-h-[297mm] bg-white p-10 shadow-lg print:shadow-none print:p-0 flex flex-col gap-4 font-sans text-gray-900 leading-normal">
          
          {/* Cabeçalho */}
          <div className="text-center">
            <h1 className="text-xl font-bold uppercase tracking-wide text-gray-900">{nome}</h1>
            {cargoAlvo && <p className="text-xs italic font-medium text-gray-700 mt-1">{cargoAlvo}</p>}
            
            {/* Contatos / Links compactos */}
            <div className="text-[10px] text-gray-600 flex flex-wrap justify-center gap-x-3 gap-y-1 mt-2">
              {email && <span>{email}</span>}
              {telefone && <span>• {telefone}</span>}
              {linkedin && <span>• linkedin.com/in/{linkedin}</span>}
              {github && <span>• github.com/{github}</span>}
              {lattes && <span>• {lattes}</span>}
            </div>
          </div>

          <hr className="border-gray-800 border-t-2" />

          {/* Resumo Profissional */}
          {resumo.trim() && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-1.5">Resumo Profissional</h3>
              <p className="text-xs text-gray-700 text-justify whitespace-pre-line leading-relaxed">{resumo}</p>
            </div>
          )}

          {/* Formação Acadêmica */}
          {formacoes.some(f => f.curso.trim() !== '') && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">Formação Acadêmica</h3>
              <div className="space-y-2">
                {formacoes.filter(f => f.curso.trim() !== '').map((form) => (
                  <div key={form.id} className="flex justify-between items-baseline text-xs text-gray-700">
                    <div>
                      <span className="font-semibold">{form.curso}</span>
                      {form.instituicao && <span> — {form.instituicao}</span>}
                    </div>
                    {form.ano && <span className="text-gray-500 flex-shrink-0 ml-4">{form.ano}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experiência Profissional */}
          {experiencias.some(e => e.cargo.trim() !== '') && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">Experiência Profissional</h3>
              <div className="space-y-3">
                {experiencias.filter(e => e.cargo.trim() !== '').map((exp) => (
                  <div key={exp.id} className="text-xs text-gray-700">
                    <div className="flex justify-between items-baseline font-semibold">
                      <div>
                        <span>{exp.cargo}</span>
                        {exp.empresa && <span className="font-normal text-gray-600"> — {exp.empresa}</span>}
                      </div>
                      {exp.periodo && <span className="text-gray-500 font-normal flex-shrink-0 ml-4">{exp.periodo}</span>}
                    </div>
                    {exp.atividades.some(atv => atv.trim() !== '') && (
                      <ul className="list-disc list-inside mt-1 space-y-0.5 text-gray-600 pl-1">
                        {exp.atividades.filter(atv => atv.trim() !== '').map((atv, i) => (
                          <li key={i} className="text-justify leading-relaxed">{atv}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cursos e Certificações (Renderiza dinamicamente se preenchido) */}
          {cursos.some(c => c.nome.trim() !== '') && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-2">Cursos e Certificações</h3>
              <div className="space-y-2">
                {cursos.filter(c => c.nome.trim() !== '').map((curso) => (
                  <div key={curso.id} className="flex justify-between items-baseline text-xs text-gray-700">
                    <div>
                      <span className="font-semibold">{curso.nome}</span>
                      {curso.instituicao && <span> — {curso.instituicao}</span>}
                    </div>
                    {curso.ano && <span className="text-gray-500 flex-shrink-0 ml-4">{curso.ano}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Principais Competências */}
          {competencias.some(c => c.trim() !== '') && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-1.5">Principais Competências</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                {competencias.filter(c => c.trim() !== '').join(', ')}
              </p>
            </div>
          )}

          {/* Idiomas */}
          {idiomas.some(i => i.trim() !== '') && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-800 border-b border-gray-300 pb-1 mb-1.5">Idiomas</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                {idiomas.filter(i => i.trim() !== '').join(', ')}
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
