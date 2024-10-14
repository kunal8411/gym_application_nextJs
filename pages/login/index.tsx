import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <>
      <section
        className=" set-bg h-dvh"
        data-setbg="/breadcrumb/classes-breadcrumb.jpg"
        style={{
          backgroundImage: "url(/breadcrumb/classes-breadcrumb.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text">
                {/* <h2>Contact US</h2> */}
                <div className="flex items-center justify-center w-full h-screen px-4">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
