import { useState } from 'react';
import { ShieldCheck, Plus, Trash2, Download } from 'lucide-react';

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

interface CursoCertificacao {
  id: string;
  nome: string;
  instituicao: string;
  ano: string;
}

export default function App() {
  // Dados Pessoais - Iniciando vazios ou limpos para você preencher
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [cidade, setCidade] = useState('');
  const [resumo, setResumo] = useState('');

  // Listas Dinâmicas - Iniciando vazias com um item estruturado em branco
  const [formacoes, setFormacoes] = useState<Formacao[]>([
    { id: '1', curso: '', instituicao: '', ano: '' }
  ]);

  const [experiencias, setExperiencias] = useState<Experiencia[]>([
    { id: '1', cargo: '', empresa: '', periodo: '', atividades: '' }
  ]);

  const [cursos, setCursos] = useState<CursoCertificacao[]>([
    { id: '1', nome: '', instituicao: '', ano: '' }
  ]);

  const [competencias, setCompetencias] = useState<string[]>(['']);
  const [idiomas, setIdiomas] = useState<string[]>(['']);

  // Funções de Gerenciamento
  const adicionarFormacao = () => {
    setFormacoes([...formacoes, { id: Date.now().toString(), curso: '', instituicao: '', ano: '' }]);
  };
  const removerFormacao = (id: string) => setFormacoes(formacoes.filter(f => f.id !== id));

  const adicionarExperiencia = () => {
    setExperiencias([...experiencias, { id: Date.now().toString(), cargo: '', empresa: '', periodo: '', atividades: '' }]);
  };
  const removerExperiencia = (id: string) => setExperiencias(experiencias.filter(e => e.id !== id));

  const adicionarCurso = () => {
    setCursos([...cursos, { id: Date.now().toString(), nome: '', instituicao: '', ano: '' }]);
  };
  const removerCurso = (id: string) => setCursos(cursos.filter(c => c.id !== id));

  const adicionarCompetencia = () => setCompetencias([...competencias, '']);
  const removerCompetencia = (index: number) => setCompetencias(competencias.filter((_, i) => i !== index));
  const handleCompetenciaChange = (index: number, valor: string) => {
    const novas = [...competencias];
    novas[index] = valor;
    setCompetencias(novas);
  };

  const adicionarIdioma = () => setIdiomas([...idiomas, '']);
  const removerIdioma = (index: number) => setIdiomas(idiomas.filter((_, i) => i !== index));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col antialiased font-sans print:bg-white text-gray-900">
      
      {/* BARRA TOPO: INTERFACE DO SISTEMA (Escondida no PDF) */}
      <header className="bg-slate-800 border-b border-slate-700 py-4 px-6 flex justify-between items-center shadow-md print:hidden text-white">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400" />
          <h1 className="text-lg font-bold tracking-wide">Gerador de Currículo ATS</h1>
        </div>
        <button
          onClick={handlePrint}
          className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition"
        >
          <Download className="w-4 h-4" /> Imprimir / Salvar PDF
        </button>
      </header>

      {/* CONTAINER SPLIT: FORMULÁRIO vs PREVIEW */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden h-[calc(100vh-69px)] print:h-auto print:overflow-visible">
        
        {/* PAINEL ESQUERDO: FORMULÁRIO DE ENTRADA (Escondido no PDF) */}
        <aside className="w-full md:w-1/2 p-6 overflow-y-auto bg-white border-r border-gray-200 space-y-6 print:hidden">
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <ShieldCheck className="text-blue-600 shrink-0 mt-0.5" size={18} />
            <p className="text-xs text-blue-900 leading-relaxed">
              <span className="font-bold">Privacidade Total:</span> Seus dados não são salvos em nenhum servidor externo. Eles ficam salvos apenas na tela do seu computador enquanto a aba estiver aberta.
            </p>
          </div>

          {/* Dados Pessoais */}
          <section className="space-y-4 border-b pb-6">
            <h2 className="text-gray-800 font-bold text-sm uppercase tracking-wider">Dados Pessoais</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-600 font-medium block mb-1">Nome Completo</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-500" placeholder="Ex: Maria Silva" />
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium block mb-1">Cargo Alvo</label>
                <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-500" placeholder="Ex: Tech Recruiter" />
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium block mb-1">E-mail</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-500" placeholder="exemplo@email.com" />
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium block mb-1">Telefone</label>
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-500" placeholder="(11) 99999-9999" />
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium block mb-1">LinkedIn (Link ou usuário)</label>
                <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-500" placeholder="linkedin.com/in/seu-perfil" />
              </div>
              <div>
                <label className="text-xs text-gray-600 font-medium block mb-1">Cidade / Estado</label>
                <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-500" placeholder="São Paulo - SP" />
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-600 font-medium block mb-1">Resumo Profissional</label>
              <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} rows={3} className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-blue-500 resize-none" placeholder="Breve resumo sobre sua carreira e principais habilidades..." />
            </div>
          </section>

          {/* Formação Acadêmica */}
          <section className="space-y-4 border-b pb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-800 font-bold text-sm uppercase tracking-wider">Formação Acadêmica</h2>
              <button onClick={adicionarFormacao} className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline"><Plus className="w-3.5 h-3.5" /> Adicionar</button>
            </div>
            {formacoes.map((f) => (
              <div key={f.id} className="grid grid-cols-3 gap-3 items-end bg-gray-50 p-3 rounded border border-gray-200 relative">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Curso</label>
                  <input type="text" value={f.curso} onChange={(e) => setFormacoes(formacoes.map(item => item.id === f.id ? { ...item, curso: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Instituição</label>
                  <input type="text" value={f.instituicao} onChange={(e) => setFormacoes(formacoes.map(item => item.id === f.id ? { ...item, instituicao: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Ano / Período</label>
                    <input type="text" value={f.ano} onChange={(e) => setFormacoes(formacoes.map(item => item.id === f.id ? { ...item, ano: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                  </div>
                  {formacoes.length > 1 && (
                    <button onClick={() => removerFormacao(f.id)} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-4 h-4" /></button>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Experiência Profissional */}
          <section className="space-y-4 border-b pb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-800 font-bold text-sm uppercase tracking-wider">Experiência Profissional</h2>
              <button onClick={adicionarExperiencia} className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline"><Plus className="w-3.5 h-3.5" /> Adicionar</button>
            </div>
            {experiencias.map((exp) => (
              <div key={exp.id} className="bg-gray-50 p-3 rounded border border-gray-200 space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Cargo</label>
                    <input type="text" value={exp.cargo} onChange={(e) => setExperiencias(experiencias.map(item => item.id === exp.id ? { ...item, cargo: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Empresa</label>
                    <input type="text" value={exp.empresa} onChange={(e) => setExperiencias(experiencias.map(item => item.id === exp.id ? { ...item, empresa: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Período</label>
                    <input type="text" value={exp.periodo} onChange={(e) => setExperiencias(experiencias.map(item => item.id === exp.id ? { ...item, periodo: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-[10px] font-bold text-gray-500 block">Descrição de Atividades (Uma por linha)</label>
                    {experiencias.length > 1 && (
                      <button onClick={() => removerExperiencia(exp.id)} className="text-red-500 hover:text-red-700 flex items-center gap-0.5 text-[10px] font-semibold"><Trash2 className="w-3 h-3" /> Remover Bloco</button>
                    )}
                  </div>
                  <textarea value={exp.atividades} onChange={(e) => setExperiencias(experiencias.map(item => item.id === exp.id ? { ...item, atividades: e.target.value } : item))} rows={3} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none resize-none font-mono" placeholder="• Recrutamento end-to-end de perfis tech&#10;• Triagem ativa através do LinkedIn Recruiter" />
                </div>
              </div>
            ))}
          </section>

          {/* Cursos e Certificações */}
          <section className="space-y-4 border-b pb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-800 font-bold text-sm uppercase tracking-wider">Cursos e Certificações</h2>
              <button onClick={adicionarCurso} className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline"><Plus className="w-3.5 h-3.5" /> Adicionar</button>
            </div>
            {cursos.map((c) => (
              <div key={c.id} className="grid grid-cols-3 gap-3 items-end bg-gray-50 p-3 rounded border border-gray-200 relative">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Curso / Certificado</label>
                  <input type="text" value={c.nome} onChange={(e) => setCursos(cursos.map(item => item.id === c.id ? { ...item, nome: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Instituição Emissora</label>
                  <input type="text" value={c.instituicao} onChange={(e) => setCursos(cursos.map(item => item.id === c.id ? { ...item, instituicao: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-gray-500 block mb-0.5">Ano</label>
                    <input type="text" value={c.ano} onChange={(e) => setCursos(cursos.map(item => item.id === c.id ? { ...item, ano: e.target.value } : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" />
                  </div>
                  {cursos.length > 1 && (
                    <button onClick={() => removerCurso(c.id)} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-4 h-4" /></button>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Competências */}
          <section className="space-y-4 border-b pb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-800 font-bold text-sm uppercase tracking-wider">Competências</h2>
              <button onClick={adicionarCompetencia} className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline"><Plus className="w-3.5 h-3.5" /> Adicionar</button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {competencias.map((comp, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <input type="text" value={comp} onChange={(e) => handleCompetenciaChange(index, e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" placeholder="Ex: Hunting Ativo" />
                  {competencias.length > 1 && (
                    <button onClick={() => removerCompetencia(index)} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-3.5 h-3.5" /></button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Idiomas */}
          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-gray-800 font-bold text-sm uppercase tracking-wider">Idiomas</h2>
              <button onClick={adicionarIdioma} className="text-xs text-blue-600 font-semibold flex items-center gap-1 hover:underline"><Plus className="w-3.5 h-3.5" /> Adicionar</button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {idiomas.map((idioma, index) => (
                <div key={index} className="flex items-center gap-1.5">
                  <input type="text" value={idioma} onChange={(e) => setIdiomas(idiomas.map((item, i) => i === index ? e.target.value : item))} className="w-full border border-gray-300 rounded px-2 py-1 text-xs outline-none" placeholder="Ex: Inglês (Avançado)" />
                  {idiomas.length > 1 && (
                    <button onClick={() => removerIdioma(index)} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-3.5 h-3.5" /></button>
                  )}
                </div>
              ))}
            </div>
          </section>

        </aside>

        {/* PAINEL DIREITO: VISUALIZADOR DO CURRÍCULO (A4 Puro em Coluna Única Otimizado para ATS) */}
        <main className="w-full md:w-1/2 p-8 bg-slate-700 overflow-y-auto flex justify-center scrollbar-thin print:p-0 print:bg-white print:w-full print:h-auto print:overflow-visible">
          <div id="folha-curriculo" className="w-[210mm] min-h-[297mm] bg-white text-gray-900 p-[20mm] shadow-xl flex flex-col gap-5 print:shadow-none print:p-0 print:w-full print:min-h-0 self-start">
            
            {/* Cabeçalho Centralizado Simples */}
            <div className="text-center space-y-1">
              <h2 className="text-xl font-bold tracking-wide uppercase text-black">{nome || 'SEU NOME COMPLETO'}</h2>
              {cargo && <p className="text-xs font-semibold text-gray-600 italic tracking-wide">{cargo}</p>}
              <div className="text-[11px] text-gray-600 flex justify-center gap-3 flex-wrap mt-2">
                {email && <span>{email}</span>}
                {telefone && <span>• {telefone}</span>}
                {cidade && <span>• {cidade}</span>}
                {linkedin && <span>• {linkedin}</span>}
              </div>
            </div>

            <hr className="border-gray-800 border-t" />

            {/* Resumo Profissional */}
            {resumo.trim() && (
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-black border-b border-gray-300 pb-0.5 mb-1.5">Resumo Profissional</h3>
                <p className="text-xs text-gray-800 text-justify whitespace-pre-line leading-relaxed">{resumo}</p>
              </div>
            )}

            {/* Formação Acadêmica */}
            {formacoes.some(f => f.curso.trim() !== '') && (
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-black border-b border-gray-300 pb-0.5 mb-2">Formação Acadêmica</h3>
                <div className="space-y-1.5">
                  {formacoes.filter(f => f.curso.trim() !== '').map((f) => (
                    <div key={f.id} className="flex justify-between text-xs text-gray-800">
                      <div>
                        <span className="font-bold">{f.curso}</span>
                        {f.instituicao && <span className="text-gray-600"> — {f.instituicao}</span>}
                      </div>
                      <span className="text-gray-600 font-mono text-[11px] shrink-0 ml-4">{f.ano}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Experiência Profissional */}
            {experiencias.some(e => e.cargo.trim() !== '') && (
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-black border-b border-gray-300 pb-0.5 mb-2">Experiência Profissional</h3>
                <div className="space-y-3">
                  {experiencias.filter(e => e.cargo.trim() !== '').map((exp) => (
                    <div key={exp.id} className="space-y-1">
                      <div className="flex justify-between text-xs text-gray-800">
                        <div>
                          <span className="font-bold">{exp.cargo}</span>
                          {exp.empresa && <span className="text-gray-600"> — {exp.empresa}</span>}
                        </div>
                        <span className="text-gray-600 font-mono text-[11px] shrink-0 ml-4">{exp.periodo}</span>
                      </div>
                      {exp.atividades.trim() && (
                        <ul className="list-disc list-inside text-xs text-gray-700 pl-1 space-y-0.5">
                          {exp.atividades.split('\n').filter(line => line.trim() !== '').map((linha, idx) => (
                            <li key={idx} className="text-justify leading-relaxed">{linha}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cursos e Certificações */}
            {cursos.some(c => c.nome.trim() !== '') && (
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-black border-b border-gray-300 pb-0.5 mb-2">Cursos e Certificações</h3>
                <div className="space-y-1.5">
                  {cursos.filter(c => c.nome.trim() !== '').map((c) => (
                    <div key={c.id} className="flex justify-between text-xs text-gray-800">
                      <div>
                        <span className="font-bold">{c.nome}</span>
                        {c.instituicao && <span className="text-gray-600"> — {c.instituicao}</span>}
                      </div>
                      <span className="text-gray-600 font-mono text-[11px] shrink-0 ml-4">{c.ano}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Competências */}
            {competencias.filter(c => c.trim() !== '').length > 0 && (
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-black border-b border-gray-300 pb-0.5 mb-1.5">Principais Competências</h3>
                <p className="text-xs text-gray-800 leading-relaxed">
                  {competencias.filter(c => c.trim() !== '').join(', ')}
                </p>
              </div>
            )}

            {/* Idiomas */}
            {idiomas.filter(i => i.trim() !== '').length > 0 && (
              <div>
                <h3 className="text-xs font-bold tracking-wider uppercase text-black border-b border-gray-300 pb-0.5 mb-1.5">Idiomas</h3>
                <p className="text-xs text-gray-800 leading-relaxed">
                  {idiomas.filter(i => i.trim() !== '').join(', ')}
                </p>
              </div>
            )}

          </div>
        </main>

      </div>

      {/* REGRAS DE IMPRESSÃO - ESTILO 100% LIMPO EM COLUNA ÚNICA */}
      <style>{`
        @media print {
          html, body {
            background: #ffffff !important;
            color: #000000 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          header, aside, button {
            display: none !important;
          }
          main {
            padding: 0 !important;
            background: #ffffff !important;
            overflow: visible !important;
            width: 100% !important;
            height: auto !important;
          }
          #folha-curriculo {
            box-shadow: none !important;
            border: none !important;
            padding: 12mm 12mm !important;
            width: 100% !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
