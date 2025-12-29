import { InfoCircleOutlined } from "@ant-design/icons";

function LegalInfo() {
  return (
    <div>
      <p className="text-xs mt-10 space-x-2 text-center px-10 sm:px-20 lg:px-0">
        <InfoCircleOutlined />
        Les questions/réponses proviennent de{" "}
        <span>
          <a
            href="https://www.automotoecole-junien.fr/wp-content/uploads/2024/03/banque-verifications-23_01_2023.pdf"
            target="_blank"
            className="underline"
          >
            cette banque de questions
          </a>
        </span>
        . Quelques réponses ont été modifiés pour améliorer la clarté et la
        redondance.
      </p>
    </div>
  );
}
export default LegalInfo;
