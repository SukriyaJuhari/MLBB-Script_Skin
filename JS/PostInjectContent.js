export default class PostInjectContent {
  constructor(rootData) {
        // Inject Content
      document.querySelector(".fileName").innerText = rootData.fileName;
      document.querySelector(".metaName").innerHTML =
        `${rootData.fileName} <span style="background:#ddd;padding:2px 8px;border-radius:999px;font-size:12px;">${rootData.fileType}</span>`;
      document.querySelector(".metaDate").innerText = rootData.fileDate;
      
      // Generate option dari rootData
      const select = document.querySelector(".skinSelect");
      rootData.options.forEach(opt => {
        const o = document.createElement("option");
        o.value = opt.value;
        o.textContent = opt.name;
        if (opt.selected) o.selected = true;
        select.appendChild(o);
      })
      const downloadBtn = document.querySelector(".downloadLink");
      const metaSize = document.querySelector(".metaSize");
      
      
      function updateLink() {
        const selected = select.value;
        const selectedOption = rootData.options.find(opt => opt.value === selected);
        downloadBtn.href = `${rootData.baseDownloadUrl}=${rootData.nameHero}_${selected}=${rootData.skinKategor}`;
        
        
        
        metaSize.innerText = selectedOption.size;
      }
      
      select.addEventListener("change", updateLink);
      updateLink(); // set default awal
  }
}