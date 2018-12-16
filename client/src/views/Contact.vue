<template>
    <section class="mb-4 container">
        <h2 class="font-weight-bold text-center my-4 title-text">Contact me</h2>
        <p class="text-center mx-auto mb-5 title-text">
            Feel free to reach out using this form or directly via email or phone.
        </p>
        <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control">
                                <label for="name" class="title-text">Your name</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="email" class="form-control">
                                <label for="email" class="title-text">Your email</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" class="form-control">
                                <label for="subject" class="title-text">Subject</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                <label for="message" class="title-text">Your message</label>
                            </div>

                        </div>
                    </div>
                </form>
                <div class="text-center text-md-left">
                    <button class="btn btn-projects">Send</button>
                </div>
                <div class="status"></div>
            </div>
            <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="fa fa-map-marker fa-2x text-white"></i>
                        <p class="title-text">Overland Park KS, 66223</p>
                    </li>

                    <li><i class="fa fa-phone mt-4 fa-2x text-white"></i>
                        <p class="title-text">913-850-9442</p>
                    </li>

                    <li><i class="fa fa-envelope mt-4 fa-2x text-white"></i>
                        <p class="title-text">hunterttrammell@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
