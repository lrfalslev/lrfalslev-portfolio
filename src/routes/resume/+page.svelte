<script lang="ts">
    let date = new Date().toISOString().split('T')[0];
    let filename = "LucasFalslevResume" + date + ".pdf";
</script>


<div class="m-4">
    resume coming soon
    <div class="btn">
        <a download={filename} target="_blank" href={"/LucasFalslevResume.pdf"}>
            Download .pdf
        </a>
    </div>
</div>