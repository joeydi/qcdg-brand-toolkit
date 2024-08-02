import Section from '../components/Section';
import File from '../components/File';

export default function Typography() {
  return (
    <>
      <Section>
        <h2>
          Typography <span>Headings</span>
        </h2>
        <p>
          Gotham Bold should be used for headings to reinforce the connection to the brand. A combination of regular and bold
          weights can be used to emphasize certain words.
        </p>
        <File href="/fonts/Gotham.zip" name="Gotham.zip" size="12.5 MB" />
      </Section>
      <Section>
        <h2>
          Typography <span>Body Copy</span>
        </h2>
        <p>
          DM Sans should be used for body copy and other long passages of text. The geometric properties match well with Gotham
          for visual consistency, while the condensed letterforms and slighter heavier weight improve readability at small sizes.
        </p>
        <File href="/fonts/DM Sans.zip" name="DM Sans.zip" size="12.5 MB" />
      </Section>
      <Section>
        <h2>
          Typography <span>Details</span>
        </h2>
        <p>
          DM Mono can be used as a complement to DM Sans to indicate more technical content such as dimensions and specifications.
        </p>
        <p>
          As the name suggests, DM Mono is a monospaced font where each character is the same width. This improves legibility for
          tabular data and technical specs by maintaining consistent vertical alignment.
        </p>
        <File href="/fonts/DM Mono.zip" name="DM Mono.zip" size="12.5 MB" />
      </Section>
    </>
  );
}
