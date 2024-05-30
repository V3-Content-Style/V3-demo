---
draft: false
align: justify
---

<!-- <div style="text-align: justify;"> -->

***Abstract:*** <span class="lowlight-gray">
    We contribute an unsupervised method that effectively learns from raw observation and disentangles its latent space into content and style representations. Unlike most disentanglement algorithms that rely on domain-specific labels and knowledge, our method is based on the insight of domain-general statistical differences between content and style --- **content varies more among different fragments within a sample but maintains an invariant vocabulary across data samples, whereas style remains relatively invariant within a sample but exhibits more significant variation across different samples**. We integrate such inductive bias into an encoder-decoder architecture and name our method after V3 (**v**ariance-**v**ersus-in**v**ariance). Experimental results show that V3 generalizes across two distinct domains in different modalities, music audio and images of written digits, successfully learning pitch-timbre and digit-color disentanglements, respectively. Also, the disentanglement robustness significantly outperforms baseline unsupervised methods and is even comparable to supervised counterparts. Furthermore, symbolic-level interpretability emerges in the learned codebook of content, forging a near one-to-one alignment between machine representation and human knowledge.
</span>


This demonstration page serves as a supplement to the paper. We provide interactive demos for the two tasks mentioned in the paper. The demos allow you to explore the learned latent space, learned codebook as the emergent vocabulary, and the style transfer results performed by learned latent representations.
- **Visualizations**: You can adjust the codebook size through the radio buttons to see how the visualization changes. The **t-SNE visualizations** of latent content and style representations provide an intuitive understanding of the **disentanglement**. The **confusion matrix** of the codebook shows how well the learned vocabulary **align with human knowledge**.
- **Style Transfer**: Under a specific codebook size, you can select an individual content or style to see the corresponding style transfer results. If a content index is selected, we will show the style transfer results of this content recombined with all styles (taking the mean of the style representations). If a style index is selected, we will show the style transfer results of this style recombined with all contents. Note that the content indices are sorted in the order of the codebook.

We compare V3 with the MINE-based method and the cycle loss-based method as mentioned in the paper. Note that all models shown in the demos have already got **good reconstruction performance**, which we omit here for simplicity.

<br>

## Music Task Demo: Learning Pitches and Timbres
<table style="text-align: center; margin:auto">
        <tr>
            <td>
                <image src="music_data_sample_1.png" style="width: 100%; margin:auto">
            </td>
            <td>
                <image src="music_data_sample_2.png" style="width: 100%; margin:auto">
            </td>
        </tr>
        <tr>
            <td>
                <audio controls controlsList="nodownload" preload="none">
                    <source src="music_data_sample_1.wav">
                </audio>
            </td>
            <td>
                <audio controls controlsList="nodownload" preload="none">
                    <source src="music_data_sample_2.wav">
                </audio>
            </td>
        </tr>
    </table>

In this demo, we show how V3 learns to disentangle pitch and timbre from raw music audio played by single instruments. Above shows the spectrogram and the audio of a sample of the dataset. There are 12 pitches (a full octaive) and 12 timbres involved in the dataset. V3 learns to disentangle the pitch content and timbre style from audio samples like above without any supervision except segmentation.

<div class="taskdemo-container">
    <h3>Proposed: V3</h3>
    Codebook size: 
    <input type="radio" value="12" checked="checked" name="music_codebook_v3"> <!--checked设置默认选中-->
    K=12
    <input type="radio" value="24" name="music_codebook_v3">
    K=24
    <input type="radio" value="48" name="music_codebook_v3">
    K=48
    <br><br>
    <table style="text-align: center; margin:auto">
        <tr>
            <th style="width: 33%">Content Visualization</td>
            <th style="width: 33%">Style Visualization</td>
            <th style="width: 33%">Codebook Confusion Matrix</td>
        </tr>
        <tr>
            <td>
                <image src="music_v3_12/emb_c_tsne_3d.svg" id="music_v3_12_c" style="display: ">
                <image src="music_v3_24/emb_c_tsne_3d.svg" id="music_v3_24_c" style="display: none"> 
                <image src="music_v3_48/emb_c_tsne_3d.svg" id="music_v3_48_c" style="display: none">
            </td>
            <td>
                <image src="music_v3_12/emb_s_tsne_3d.svg" id="music_v3_12_s" style="display: ">
                <image src="music_v3_24/emb_s_tsne_3d.svg" id="music_v3_24_s" style="display: none"> 
                <image src="music_v3_48/emb_s_tsne_3d.svg" id="music_v3_48_s" style="display: none"> 
            </td>
            <td>
                <image src="music_v3_12/codebook_confusion_matrix.svg" id="music_v3_12_cf" style="display: ">
                <image src="music_v3_24/codebook_confusion_matrix.svg" id="music_v3_24_cf" style="display: none"> 
                <image src="music_v3_48/codebook_confusion_matrix.svg" id="music_v3_48_cf" style="display: none"> 
            </td>
        </tr>
        <tr>
            <td>
                <image src="music_legend_c.svg" id="music_c_legend" style="width: 42%; margin: auto">
            </td>
            <td>
                <image src="music_legend_s.svg" id="music_s_legend" style="width: 100%; margin: auto">
            </td>
            <td>
                <image src="confusion_mtx_legend.svg" id="cf_legend" style="width: 25%; margin: auto">
            </td>
        </tr>
    </table>
    <br>
    Fix content index, traverse all styles:
    <div id="select_music_v3_fix_c"></div>
    Fix style, traverse all content indices:
    <div id="select_music_v3_fix_s"></div>
    <br>
    <div id="transfer_music_v3"></div>
    From both the visualizations and the style transfer results, we can see that V3 successfully learns to disentangle the pitches and timbres well. The content and style representations show clear locality compared to ground truth labels, and the confusion matrices show a near one-to-one alignment with human knowledge. The style transfer results are all correct when K=12, and are correct under well-learned content indices when K=24 and K=48, as we can see the fundamental frequency is consistent when we fix the content index and traverse all styles, and the timbre is consistent when we fix the style and traverse all content indices.
</div>

<div class="taskdemo-container">
    <h3>Baseline: MINE-based</h3>
    Codebook size: 
    <input type="radio" value="12" checked="checked" name="music_codebook_mine"> <!--checked设置默认选中-->
    K=12
    <input type="radio" value="24" name="music_codebook_mine">
    K=24
    <input type="radio" value="48" name="music_codebook_mine">
    K=48
    <br><br>
    <table style="text-align: center; margin:auto">
        <tr>
            <th style="width: 33%">Content Visualization</td>
            <th style="width: 33%">Style Visualization</td>
            <th style="width: 33%">Codebook Confusion Matrix</td>
        </tr>
        <tr>
            <td>
                <image src="music_mine_12/emb_c_tsne_3d.svg" id="music_mine_12_c" style="display: ">
                <image src="music_mine_24/emb_c_tsne_3d.svg" id="music_mine_24_c" style="display: none"> 
                <image src="music_mine_48/emb_c_tsne_3d.svg" id="music_mine_48_c" style="display: none">
            </td>
            <td>
                <image src="music_mine_12/emb_s_tsne_3d.svg" id="music_mine_12_s" style="display: ">
                <image src="music_mine_24/emb_s_tsne_3d.svg" id="music_mine_24_s" style="display: none"> 
                <image src="music_mine_48/emb_s_tsne_3d.svg" id="music_mine_48_s" style="display: none"> 
            </td>
            <td>
                <image src="music_mine_12/codebook_confusion_matrix.svg" id="music_mine_12_cf" style="display: ">
                <image src="music_mine_24/codebook_confusion_matrix.svg" id="music_mine_24_cf" style="display: none"> 
                <image src="music_mine_48/codebook_confusion_matrix.svg" id="music_mine_48_cf" style="display: none"> 
            </td>
        </tr>
        <tr>
            <td>
                <image src="music_legend_c.svg" id="music_c_legend" style="width: 42%; margin: auto">
            </td>
            <td>
                <image src="music_legend_s.svg" id="music_s_legend" style="width: 100%; margin: auto">
            </td>
            <td>
                <image src="confusion_mtx_legend.svg" id="cf_legend" style="width: 25%; margin: auto">
            </td>
        </tr>
    </table>
    <br>
    Fix content index, traverse all styles:
    <div id="select_music_mine_fix_c"></div>
    Fix style, traverse all content indices:
    <div id="select_music_mine_fix_s"></div>
    <br>
    <div id="transfer_music_mine"></div>
    Compared to V3, the MINE-based baseline doesn't learn the codebook or disentangled representations as well. The latent representation visualizations are pretty messy, and only a few codebook atoms align with human knowledge when K=24. Also, the style transfer results are hardly correct, as it keeps repeating the same pitch using random timbres.
</div>

<div class="taskdemo-container">
    <h3>Baseline: Cycle Loss</h3>
    Codebook size: 
    <input type="radio" value="12" checked="checked" name="music_codebook_cycle"> <!--checked设置默认选中-->
    K=12
    <input type="radio" value="24" name="music_codebook_cycle">
    K=24
    <input type="radio" value="48" name="music_codebook_cycle">
    K=48
    <br><br>
    <table style="text-align: center; margin:auto">
        <tr>
            <th style="width: 33%">Content Visualization</td>
            <th style="width: 33%">Style Visualization</td>
            <th style="width: 33%">Codebook Confusion Matrix</td>
        </tr>
        <tr>
            <td>
                <image src="music_cycle_12/emb_c_tsne_3d.svg" id="music_cycle_12_c" style="display: ">
                <image src="music_cycle_24/emb_c_tsne_3d.svg" id="music_cycle_24_c" style="display: none"> 
                <image src="music_cycle_48/emb_c_tsne_3d.svg" id="music_cycle_48_c" style="display: none">
            </td>
            <td>
                <image src="music_cycle_12/emb_s_tsne_3d.svg" id="music_cycle_12_s" style="display: ">
                <image src="music_cycle_24/emb_s_tsne_3d.svg" id="music_cycle_24_s" style="display: none"> 
                <image src="music_cycle_48/emb_s_tsne_3d.svg" id="music_cycle_48_s" style="display: none"> 
            </td>
            <td>
                <image src="music_cycle_12/codebook_confusion_matrix.svg" id="music_cycle_12_cf" style="display: ">
                <image src="music_cycle_24/codebook_confusion_matrix.svg" id="music_cycle_24_cf" style="display: none"> 
                <image src="music_cycle_48/codebook_confusion_matrix.svg" id="music_cycle_48_cf" style="display: none"> 
            </td>
        </tr>
        <tr>
            <td>
                <image src="music_legend_c.svg" id="music_c_legend" style="width: 42%; margin: auto">
            </td>
            <td>
                <image src="music_legend_s.svg" id="music_s_legend" style="width: 100%; margin: auto">
            </td>
            <td>
                <image src="confusion_mtx_legend.svg" id="cf_legend" style="width: 25%; margin: auto">
            </td>
        </tr>
    </table>
    <br>
    Fix content index, traverse all styles:
    <div id="select_music_cycle_fix_c"></div>
    Fix style, traverse all content indices:
    <div id="select_music_cycle_fix_s"></div>
    <br>
    <div id="transfer_music_cycle"></div>
    Compared to V3, the cycle loss-based baseline can learn style representations with some extent of locality, but both the content representations and the confusion matrices are significantly worse than V3. The style transfer results are also incorrect, as it fails to distinguish different pitches.
</div>

<br><br><br>

## Image Task Demo: Learning Digits and Colors
<a id="image"></a>

<image src="image_data_sample.svg" style="display: ">

In this demo, we show how V3 learns to disentangle digits and colors from images of written digit strings. First, we show some samples of the dataset above. There are 10 digits and 8 colors involved in the dataset. V3 learns to disentangle the digit content and color style from the above images without any supervision except segmentation.

<div class="taskdemo-container">
    <h3>Proposed: V3</h3>
    Codebook size: 
    <input type="radio" value="10" checked="checked" name="image_codebook_v3"> <!--checked设置默认选中-->
    K=10
    <input type="radio" value="20" name="image_codebook_v3">
    K=20
    <input type="radio" value="40" name="image_codebook_v3">
    K=40
    <br><br>
    <table style="text-align: center; margin:auto">
        <tr>
            <th style="width: 33%">Content Visualization</td>
            <th style="width: 33%">Style Visualization</td>
            <th style="width: 33%">Codebook Confusion Matrix</td>
        </tr>
        <tr>
            <td>
                <image src="image_v3_10/emb_c_tsne_3d.svg" id="image_v3_10_c" style="display: ">
                <image src="image_v3_20/emb_c_tsne_3d.svg" id="image_v3_20_c" style="display: none"> 
                <image src="image_v3_40/emb_c_tsne_3d.svg" id="image_v3_40_c" style="display: none">
            </td>
            <td>
                <image src="image_v3_10/emb_s_tsne_3d.svg" id="image_v3_10_s" style="display: ">
                <image src="image_v3_20/emb_s_tsne_3d.svg" id="image_v3_20_s" style="display: none"> 
                <image src="image_v3_40/emb_s_tsne_3d.svg" id="image_v3_40_s" style="display: none"> 
            </td>
            <td>
                <image src="image_v3_10/codebook_confusion_matrix.svg" id="image_v3_10_cf" style="display: ">
                <image src="image_v3_20/codebook_confusion_matrix.svg" id="image_v3_20_cf" style="display: none"> 
                <image src="image_v3_40/codebook_confusion_matrix.svg" id="image_v3_40_cf" style="display: none"> 
            </td>
        </tr>
        <tr>
            <td>
                <image src="image_legend_c.svg" id="image_c_legend" style="width: 50%; margin: auto">
            </td>
            <td>
                <image src="image_legend_s.svg" id="image_s_legend" style="width: 80%; margin: auto">
            </td>
            <td>
                <image src="confusion_mtx_legend.svg" id="cf_legend" style="width: 25%; margin: auto">
            </td>
        </tr>
    </table>
    <br>
    Fix content index, traverse all styles:
    <div id="select_image_v3_fix_c"></div>
    Fix style, traverse all content indices:
    <div id="select_image_v3_fix_s"></div>
    <br>
    <div id="transfer_image_v3"></div>
    From both the visualizations and the style transfer results, we can see that V3 successfully learns to disentangle the digit content and color style well. The content and style representations show clear locality compared to ground truth labels, and the confusion matrices show a near one-to-one alignment with human knowledge. The style transfer results are also correct and semantically meaningful.
</div>

<div class="taskdemo-container">
    <h3>Baseline: MINE-based</h3>
    Codebook size: 
    <input type="radio" value="10" checked="checked" name="image_codebook_mine"> <!--checked设置默认选中-->
    K=10
    <input type="radio" value="20" name="image_codebook_mine">
    K=20
    <input type="radio" value="40" name="image_codebook_mine">
    K=40
    <br><br>
    <table style="text-align: center; margin:auto">
        <tr>
            <th style="width: 33%">Content Visualization</td>
            <th style="width: 33%">Style Visualization</td>
            <th style="width: 33%">Codebook Confusion Matrix</td>
        </tr>
        <tr>
            <td>
                <image src="image_mine_10/emb_c_tsne_3d.svg" id="image_mine_10_c" style="display: ">
                <image src="image_mine_20/emb_c_tsne_3d.svg" id="image_mine_20_c" style="display: none"> 
                <image src="image_mine_40/emb_c_tsne_3d.svg" id="image_mine_40_c" style="display: none">
            </td>
            <td>
                <image src="image_mine_10/emb_s_tsne_3d.svg" id="image_mine_10_s" style="display: ">
                <image src="image_mine_20/emb_s_tsne_3d.svg" id="image_mine_20_s" style="display: none"> 
                <image src="image_mine_40/emb_s_tsne_3d.svg" id="image_mine_40_s" style="display: none"> 
            </td>
            <td>
                <image src="image_mine_10/codebook_confusion_matrix.svg" id="image_mine_10_cf" style="display: ">
                <image src="image_mine_20/codebook_confusion_matrix.svg" id="image_mine_20_cf" style="display: none"> 
                <image src="image_mine_40/codebook_confusion_matrix.svg" id="image_mine_40_cf" style="display: none"> 
            </td>
        </tr>
        <tr>
            <td>
                <image src="image_legend_c.svg" id="image_c_legend" style="width: 50%; margin: auto">
            </td>
            <td>
                <image src="image_legend_s.svg" id="image_s_legend" style="width: 80%; margin: auto">
            </td>
            <td>
                <image src="confusion_mtx_legend.svg" id="cf_legend" style="width: 25%; margin: auto">
            </td>
        </tr>
    </table>
    <br>
    Fix content index, traverse all styles:
    <div id="select_image_mine_fix_c"></div>
    Fix style, traverse all content indices:
    <div id="select_image_mine_fix_s"></div>
    <br>
    <div id="transfer_image_mine"></div>
    Compared to V3, the MINE-based baseline doesn't learn the codebook or disentangled representations as well. Although both content and style representations show some extent to locality, and the confusion matrices show a stair-like structure, the performances are significantly worse than V3, which is also reflected in the style transfer results.
</div>


<div class="taskdemo-container">
    <h3>Baseline: Cycle Loss</h3>
    Codebook size: 
    <input type="radio" value="10" checked="checked" name="image_codebook_cycle"> <!--checked设置默认选中-->
    K=10
    <input type="radio" value="20" name="image_codebook_cycle">
    K=20
    <input type="radio" value="40" name="image_codebook_cycle">
    K=40
    <br><br>
    <table style="text-align: center; margin:auto">
        <tr>
            <th style="width: 33%">Content Visualization</td>
            <th style="width: 33%">Style Visualization</td>
            <th style="width: 33%">Codebook Confusion Matrix</td>
        </tr>
        <tr>
            <td>
                <image src="image_cycle_10/emb_c_tsne_3d.svg" id="image_cycle_10_c" style="display: ">
                <image src="image_cycle_20/emb_c_tsne_3d.svg" id="image_cycle_20_c" style="display: none"> 
                <image src="image_cycle_40/emb_c_tsne_3d.svg" id="image_cycle_40_c" style="display: none">
            </td>
            <td>
                <image src="image_cycle_10/emb_s_tsne_3d.svg" id="image_cycle_10_s" style="display: ">
                <image src="image_cycle_20/emb_s_tsne_3d.svg" id="image_cycle_20_s" style="display: none"> 
                <image src="image_cycle_40/emb_s_tsne_3d.svg" id="image_cycle_40_s" style="display: none"> 
            </td>
            <td>
                <image src="image_cycle_10/codebook_confusion_matrix.svg" id="image_cycle_10_cf" style="display: ">
                <image src="image_cycle_20/codebook_confusion_matrix.svg" id="image_cycle_20_cf" style="display: none"> 
                <image src="image_cycle_40/codebook_confusion_matrix.svg" id="image_cycle_40_cf" style="display: none"> 
            </td>
        </tr>
        <tr>
            <td>
                <image src="image_legend_c.svg" id="image_c_legend" style="width: 50%; margin: auto">
            </td>
            <td>
                <image src="image_legend_s.svg" id="image_s_legend" style="width: 80%; margin: auto">
            </td>
            <td>
                <image src="confusion_mtx_legend.svg" id="cf_legend" style="width: 25%; margin: auto">
            </td>
        </tr>
    </table>
    <br>
    Fix content index, traverse all styles:
    <div id="select_image_cycle_fix_c"></div>
    Fix style, traverse all content indices:
    <div id="select_image_cycle_fix_s"></div>
    <br>
    <div id="transfer_image_cycle"></div>
    Compared to V3, the cycle loss-based baseline can learn a codebook with fair interpretability especially when the codebook size is large. However, the disentanglement performance is significantly worse than V3, as only the content representation is disentangled, but the style representation is still heavily entangled with the content.
</div>

<script src="js/music.js"></script>
<script src="js/image.js"></script>