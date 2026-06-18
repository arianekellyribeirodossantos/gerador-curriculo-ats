import { useState } from 'react';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
}

interface Certification {
  institution: string;
  name: string;
  year: string;
}

interface ResumeData {
  name: string;
  role: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  lattes: string;
  summary: string;
  skills: string;
  languages: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}

export default function App() {
  const [data, setData] = useState<ResumeData>({
    name: '',
    role: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    lattes: '',
    summary: '',
    skills: '',
    languages: '',
    experiences: [],
    education: [],
    certifications: []
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Funções para Experiências
  const handleAddExperience = () => {
    const newExp: Experience = { company: '', role: '', period: '', description: '' };
    setData({ ...data, experiences: [...data.experiences, newExp] });
  };

  const handleExperienceChange = (index: number, field: keyof Experience, value: string) => {
    const updated = data.experiences.map((exp, i) => i === index ? { ...exp, [field]: value } : exp);
    setData({ ...data, experiences: updated });
  };

  const handleRemoveExperience = (index: number) => {
    setData({ ...data, experiences: data.experiences.filter((_, i) => i !== index) });
  };

  // Funções para Formação Acadêmica
  const handleAddEducation = () => {
    const newEdu: Education = { institution: '', degree: '', period: '' };
    setData({ ...data, education: [...data.education, newEdu] });
  };

  const handleEducationChange = (index: number, field: keyof Education, value: string) => {
    const updated = data.education.map((edu, i) => i === index ? { ...edu, [field]: value } : edu);
    setData({ ...data, education: updated });
  };

  const handleRemoveEducation = (index: number) => {
    setData({ ...data, education: data.education.filter((_, i) => i !== index) });
  };

  // Funções para Cursos e Certificações
  const handleAddCertification = () => {
    const newCert: Certification = { institution: '', name: '', year: '' };
    setData({ ...data, certifications: [...data.certifications, newCert] });
  };

  const handleCertificationChange = (index: number, field: keyof Certification, value: string) => {
    const updated = data.certifications.map((cert, i) => i === index ? { ...cert, [field]: value } : cert);
    setData({ ...data, certifications: updated });
  };

  const handleRemoveCertification = (index: number) => {
    setData({ ...data, certifications: data.certifications.filter((_, i) => i !== index) });
  };

  const handlePrint = () => {
    window.print();
  };

  // Auxiliar para renderizar os contatos com divisores inline
  const renderContactInfo = () => {
    const infos: React.ReactNode[] = [];

    if (data.email) infos.push(<span key="email">{data.email}</span>);
    if (data.phone) infos.push(<span key="phone">{data.phone}</span>);
    if (data.linkedin) infos.push(<span key="linkedin">LinkedIn: {data.linkedin}</span>);
    if (data.github) infos.push(<span key="github">GitHub: {data.github}</span>);
    if (data.lattes) infos.push(<span key="lattes">Lattes: {data.lattes}</span>);

    return infos.reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, <span key={`div-${i}`} className="mx-2 text-gray-400">|</span>, curr], [] as React.ReactNode[]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* LADO ESQUERDO: FORMULÁRIO */}
      <div className="w-full md:w-1/2 p-8 bg-white shadow-md h-screen overflow-y-auto print:hidden">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gerador de Currículo ATS</h1>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Dados Pessoais */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 border-b pb-1">Dados Pessoais</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <input 
                type="text" name="name" value={data.name} onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 focus:ring-blue-500 focus:border-blue-500" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Cargo Alvo</label>
                <input 
                  type="text" name="role" value={data.role} onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                <input 
                  type="text" name="phone" value={data.phone} onChange={handleChange}
                  placeholder="(41) 99999-9999"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <input 
                type="email" name="email" value={data.email} onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700">User ou Link LinkedIn</label>
                <input 
                  type="text" name="linkedin" value={data.linkedin} onChange={handleChange}
                  placeholder="linkedin.com/in/seu-perfil"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">User ou Link GitHub</label>
                <input 
                  type="text" name="github" value={data.github} onChange={handleChange}
                  placeholder="github.com/seu-usuario"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700">Link Currículo Lattes</label>
                <input 
                  type="text" name="lattes" value={data.lattes} onChange={handleChange}
                  placeholder="lattes.cnpq.br/..."
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2 text-sm" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Resumo Profissional</label>
              <textarea 
                name="summary" value={data.summary} onChange={handleChange} rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Competências / Tecnologias (separe por vírgula)</label>
              <input 
                type="text" name="skills" value={data.skills} onChange={handleChange}
                placeholder="Ex: Hunting, ATS, Python, Recrutamento Técnico"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Idiomas (separe por vírgula)</label>
              <input 
                type="text" name="languages" value={data.languages} onChange={handleChange}
                placeholder="Ex: Português (Nativo), Inglês (Intermediário)"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border p-2" 
              />
            </div>
          </div>

          {/* Seção: Formação Acadêmica */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b pb-1">
              <h2 className="text-lg font-semibold text-gray-700">Formação Acadêmica</h2>
              <button
                type="button" onClick={handleAddEducation}
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-1 px-3 rounded shadow cursor-pointer"
              >
                + Adicionar
              </button>
            </div>

            {data.education.map((edu, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50 space-y-3 relative">
                <button
                  type="button" onClick={() => handleRemoveEducation(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Instituição</label>
                    <input 
                      type="text" value={edu.institution} 
                      onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Curso / Grau</label>
                    <input 
                      type="text" value={edu.degree} 
                      onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Período (ex: 2026 - 2028)</label>
                  <input 
                    type="text" value={edu.period} 
                    onChange={(e) => handleEducationChange(index, 'period', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Seção: Cursos e Certificações */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b pb-1">
              <h2 className="text-lg font-semibold text-gray-700">Cursos e Certificações</h2>
              <button
                type="button" onClick={handleAddCertification}
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-1 px-3 rounded shadow cursor-pointer"
              >
                + Adicionar
              </button>
            </div>

            {data.certifications.map((cert, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50 space-y-3 relative">
                <button
                  type="button" onClick={() => handleRemoveCertification(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Nome do Curso / Certificado</label>
                    <input 
                      type="text" value={cert.name} 
                      onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Instituição Emissora</label>
                    <input 
                      type="text" value={cert.institution} 
                      onChange={(e) => handleCertificationChange(index, 'institution', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Ano de Conclusão (ex: 2026)</label>
                  <input 
                    type="text" value={cert.year} 
                    onChange={(e) => handleCertificationChange(index, 'year', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Seção: Experiência Profissional */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center justify-between border-b pb-1">
              <h2 className="text-lg font-semibold text-gray-700">Experiência Profissional</h2>
              <button
                type="button" onClick={handleAddExperience}
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-medium py-1 px-3 rounded shadow cursor-pointer"
              >
                + Adicionar
              </button>
            </div>

            {data.experiences.map((exp, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-md bg-gray-50 space-y-3 relative">
                <button
                  type="button" onClick={() => handleRemoveExperience(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold cursor-pointer"
                >
                  ✕
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Empresa</label>
                    <input 
                      type="text" value={exp.company} 
                      onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600">Cargo</label>
                    <input 
                      type="text" value={exp.role} 
                      onChange={(e) => handleExperienceChange(index, 'role', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Período (ex: Jan/2025 - Atual)</label>
                  <input 
                    type="text" value={exp.period} 
                    onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600">Descrição / Atividades (pressione Enter para criar tópicos)</label>
                  <textarea 
                    value={exp.description} 
                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white border p-1.5 text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>

      {/* LADO DIREITO: PREVIEW E DOWNLOAD */}
      <div className="w-full md:w-1/2 p-8 bg-gray-100 flex flex-col items-center justify-start h-screen overflow-y-auto print:bg-white print:p-0 print:h-auto print:w-full print:overflow-visible">
        
        {/* A Folha de Papel do Currículo */}
        <div className="bg-white w-full max-w-[21cm] p-12 shadow-lg text-gray-900 border border-gray-200 font-serif md:min-h-[29.7cm] print:shadow-none print:border-none print:p-12 print:h-auto print:w-full">
          {/* Cabeçalho */}
          <h2 className="text-3xl font-bold uppercase tracking-wide text-center border-b pb-2">{data.name || 'Seu Nome'}</h2>
          <p className="text-center font-sans text-gray-600 mt-1 italic">{data.role || 'Cargo Desejado'}</p>
          
          {/* Informações de contato inline dinâmica */}
          <div className="text-center font-sans text-xs text-gray-600 mb-6 mt-1.5 flex flex-wrap justify-center items-center gap-y-1">
            {renderContactInfo()}
          </div>
          
          {/* Resumo */}
          {data.summary && (
            <div className="mt-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b mb-1.5 font-sans">Resumo Profissional</h3>
              <p className="text-sm leading-relaxed text-justify whitespace-pre-line font-sans text-gray-800">{data.summary}</p>
            </div>
          )}

          {/* Formação Acadêmica */}
          {data.education.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b mb-3 font-sans">Formação Acadêmica</h3>
              <div className="space-y-3">
                {data.education.map((edu, index) => (
                  <div key={index} className="font-sans text-sm">
                    <div className="flex flex-row justify-between items-start text-gray-900">
                      <span className="font-semibold text-justify pr-4">
                        {edu.degree ? `${edu.degree} — ` : ''}<span className="text-gray-700 font-medium">{edu.institution || 'Instituição'}</span>
                      </span>
                      <span className="text-xs text-gray-500 font-normal whitespace-nowrap pt-0.5">{edu.period || 'Período'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experiências Profissionais */}
          {data.experiences.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b mb-3 font-sans">Experiência Profissional</h3>
              <div className="space-y-4">
                {data.experiences.map((exp, index) => (
                  <div key={index} className="font-sans text-sm">
                    <div className="flex flex-row justify-between items-start text-gray-900">
                      <span className="font-semibold text-justify pr-4">
                        {exp.role ? `${exp.role} — ` : ''}<span className="text-gray-700 font-medium">{exp.company || 'Empresa'}</span>
                      </span>
                      <span className="text-xs text-gray-500 font-normal whitespace-nowrap pt-0.5">{exp.period || 'Período'}</span>
                    </div>
                    {exp.description && (
                      <ul className="mt-1 list-disc list-inside text-gray-700 text-sm space-y-0.5 pl-1">
                        {exp.description.split('\n').map((line, idx) => (
                          line.trim() && (
                            <li key={idx} className="text-justify leading-relaxed">
                              {line}
                            </li>
                          )
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cursos e Certificações */}
          {data.certifications.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b mb-3 font-sans">Cursos e Certificações</h3>
              <div className="space-y-2">
                {data.certifications.map((cert, index) => (
                  <div key={index} className="font-sans text-sm">
                    <div className="flex flex-row justify-between items-start text-gray-900">
                      <span className="text-gray-800 text-justify pr-4">
                        <span className="font-semibold">{cert.name || 'Nome do Curso'}</span>
                        {cert.institution ? ` — ${cert.institution}` : ''}
                      </span>
                      <span className="text-xs text-gray-500 font-normal whitespace-nowrap pt-0.5">{cert.year || 'Ano'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Competências */}
          {data.skills && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b mb-1.5 font-sans">Competências principais</h3>
              <p className="text-sm font-sans text-gray-800 leading-relaxed">
                {data.skills.split(',').map((skill, idx) => (
                  <span key={idx} className="inline-block mr-2 mb-1 bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs print:bg-transparent print:p-0 print:text-sm print:after:content-[',_'] last:print:after:content-none">
                    {skill.trim()}
                  </span>
                ))}
              </p>
            </div>
          )}

          {/* Idiomas */}
          {data.languages && (
            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-700 border-b mb-1.5 font-sans">Idiomas</h3>
              <p className="text-sm font-sans text-gray-800 leading-relaxed">
                {data.languages.split(',').map((lang, idx) => (
                  <span key={idx} className="inline-block mr-2 mb-1 bg-gray-100 text-gray-800 px-2 py-0.5 rounded text-xs print:bg-transparent print:p-0 print:text-sm print:after:content-[',_'] last:print:after:content-none">
                    {lang.trim()}
                  </span>
                ))}
              </p>
            </div>
          )}
        </div>
        
        {/* Botão de Download */}
        <div className="mt-6 mb-12 print:hidden">
          <button
            onClick={handlePrint}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded shadow transition-colors inline-block text-center cursor-pointer"
          >
            Salvar Currículo em PDF
          </button>
        </div>
      </div>
    </div>
  );
}
