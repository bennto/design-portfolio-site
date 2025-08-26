<script>
  import Thumbnail from "$lib/assets/finthrive/finthrive-thumbnail.png";
  import A from "$lib/assets/finthrive/finthrive-1.gif";
  import B from "$lib/assets/finthrive/finthrive-3.gif";
  import C from "$lib/assets/finthrive/finthrive-2.gif";
  import D from "$lib/assets/finthrive/finthrive-1.png";
  import E from "$lib/assets/finthrive/finthrive-2.png";
  import F from "$lib/assets/finthrive/finthrive-3.png";
</script>

<section>
  <h1>FinThrive</h1>
  <h6>Summer 2024</h6>
  <br />
  <p>
    This post is a "slightly" more concise version of <a
      href="https://www.behance.net/gallery/177538619/FinThrive-Experience-Design-Internship"
      target="_blank"
      rel="noopener noreferrer">this case study.</a
    >
  </p>
  <div class="thumbnail-container">
    <img src={Thumbnail} alt="FinThrive thumbnail" />
  </div>
  <br />
  <p>
    In summer 2024, I joined FinThrive as an intern on their UI/UX team.
    FinThrive develops revenue cycle management (RCM) software for healthcare
    companies, helping them simlify the patient payment process and ensure
    regulatory compliance.
  </p>
  <p>
    Just before I joined, FinThrive had acquired another healthcare software
    product: Access Coordinator. The software had been designed by a separate
    agency and its documentation was... rough. Common issues included...
  </p>
  <h2>Missing Components</h2>
  <p>
    Early into surveying Access Coordinator's app design files, I noticed that
    the previous design team had, at some point, stopped updating their design
    system, instead opting to build directly into AC's app design files instead.
    This meant that...
  </p>
  <ul>
    <li>New components were missing from the design system file.</li>
    <li>
      Components lost cohesion, as they stopped relying on their design system.
    </li>
  </ul>
  <div class="thumbnail-container">
    <img src={A} alt="Access Coordinator has missing components" />
  </div>
  <h2>Components and Variants</h2>
  <p>
    I suspect that the design files weren't originally created in Figma, because
    many of Figma's core features weren't utilized. Vitally, the component
    feature, which allows designers to create reusable components that will
    automatically sync with one another, was not used.
  </p>
  <div class="thumbnail-container">
    <img src={B} alt="Access Coordinator elements as components" />
  </div>
  <h2>Poor Accessibility</h2>
  <ul>
    <li>Components failed to pass color contrast standards.</li>
    <li>
      Inconsistent sizings of components (eg. icons) makes them difficult to use
      together.
    </li>
  </ul>
  <div class="thumbnail-container">
    <img src={C} alt="Access Coordinator has issues with low contrast" />
  </div>
  <br />
  <h2>Finding Solutions</h2>
  <p>
    The most pressing issue I had to address was finding and replacing missing
    elements in the design system. This was mostly done by cross-referencing the
    design system files with the app design files and copying in the difference.
    Components discovered in this step include:
  </p>
  <ul>
    <li>Icons (many, many icons)</li>
    <li>Dropdowns</li>
    <li>Upload fields</li>
    <li>Text editors (WYSIWYG, rich-text, etc.)</li>
    <li>Navigation bar</li>
    <li>Pop-out windows</li>
  </ul>
  <p>
    After completing the collection, I turned individual elements into reusable,
    recurring components. This involved recreating most of the items, as many of
    them had issues:
  </p>
  <div class="thumbnail-container">
    <img src={D} alt="Access Coordinator common issues" />
  </div>
  <p>
    This step also involved designing components that were not just applicable
    to current designs, but also able to be used flexibly. Take, for instance,
    this dropdown component:
  </p>
  <div class="thumbnail-container">
    <img src={E} alt="One component, multiple uses" />
  </div>
  <h2>Conclusion</h2>
  <p>
    Overall, this internship helped me train my ability to work with expansive
    design systems and app files. It was the largest design system I've worked
    with yet and doing so really helped me hone my Figma skills.
  </p>
</section>

<style>
  .thumbnail-container {
    width: 100%;
    display: flex;
    overflow: hidden;
  }
  .thumbnail-container:nth-of-type(1) {
    height: 440px;
  }
  .thumbnail-container img {
    object-fit: cover;
    width: 100%;
  }
</style>
